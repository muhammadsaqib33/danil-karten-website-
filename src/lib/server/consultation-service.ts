import crypto from 'node:crypto';
import { siteConfig } from '@/content/site';
import {
  consultationSchema,
  mapConsultationValidationErrors,
  normalizeConsultationPayload,
} from '@/lib/validations/consultation';
import {
  CrmIntegrationError,
  resolveConsultationDeliveryMode,
  submitConsultationToCrm,
} from '@/lib/server/crm-client';
import type { ConsultationApiResponse } from '@/types/consultation';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const DEDUPE_WINDOW_MS = 10 * 60 * 1000;

interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const recentSubmissions = new Map<string, number>();

export function resetConsultationServiceStores(): void {
  rateLimitStore.clear();
  recentSubmissions.clear();
}

function getFallbackPhone() {
  return {
    display: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
  };
}

function checkRateLimit(clientKey: string, now: number): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const existing = rateLimitStore.get(clientKey);
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const activeTimestamps = existing
    ? existing.timestamps.filter((ts) => ts > windowStart)
    : [];

  if (activeTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = activeTimestamps[0] ?? now;
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000),
    );
    rateLimitStore.set(clientKey, { timestamps: activeTimestamps });
    return { allowed: false, retryAfterSeconds };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(clientKey, { timestamps: activeTimestamps });
  return { allowed: true, retryAfterSeconds: 0 };
}

function pruneAndCheckDuplicate(submissionId: string, now: number): boolean {
  for (const [key, expiresAt] of recentSubmissions.entries()) {
    if (expiresAt <= now) {
      recentSubmissions.delete(key);
    }
  }

  const existingExpiry = recentSubmissions.get(submissionId);
  if (existingExpiry && existingExpiry > now) {
    return true;
  }

  return false;
}

function recordSubmissionId(submissionId: string, now: number): void {
  recentSubmissions.set(submissionId, now + DEDUPE_WINDOW_MS);
}

export interface ProcessConsultationResult {
  status: number;
  body: ConsultationApiResponse;
  retryAfterSeconds?: number;
}

export async function processConsultationRequest(
  rawBody: unknown,
  context?: {
    clientKey?: string;
    now?: number;
    env?: NodeJS.ProcessEnv;
    fetchImpl?: typeof fetch;
  },
): Promise<ProcessConsultationResult> {
  const now = context?.now ?? Date.now();
  const clientKey = context?.clientKey ?? 'unknown';
  const fallbackPhone = getFallbackPhone();

  const rateStatus = checkRateLimit(clientKey, now);
  if (!rateStatus.allowed) {
    return {
      status: 429,
      retryAfterSeconds: rateStatus.retryAfterSeconds,
      body: {
        ok: false,
        code: 'RATE_LIMITED',
        message: `Too many requests in a short period. Please wait a few minutes or call ${fallbackPhone.display} directly.`,
        fallbackPhone,
      },
    };
  }

  if (!rawBody || typeof rawBody !== 'object') {
    return {
      status: 400,
      body: {
        ok: false,
        code: 'VALIDATION_ERROR',
        message: 'Invalid request payload.',
        fallbackPhone,
      },
    };
  }

  // Honeypot spam check before returning detailed validation hints
  const maybeWebsite = (rawBody as Record<string, unknown>).website;
  if (typeof maybeWebsite === 'string' && maybeWebsite.trim().length > 0) {
    return {
      status: 400,
      body: {
        ok: false,
        code: 'VALIDATION_ERROR',
        message: `We could not verify this submission. Please try again or call ${fallbackPhone.display}.`,
        fallbackPhone,
      },
    };
  }

  const parsed = consultationSchema.safeParse(rawBody);
  if (!parsed.success) {
    return {
      status: 400,
      body: {
        ok: false,
        code: 'VALIDATION_ERROR',
        message: 'Please review the highlighted fields and try again.',
        fieldErrors: mapConsultationValidationErrors(parsed.error.issues),
        fallbackPhone,
      },
    };
  }

  const payload = normalizeConsultationPayload(parsed.data);

  if (pruneAndCheckDuplicate(payload.submissionId, now)) {
    return {
      status: 409,
      body: {
        ok: false,
        code: 'DUPLICATE_SUBMISSION',
        message:
          'This consultation request has already been submitted. Please refresh the form if you need to submit a new inquiry.',
        fallbackPhone,
      },
    };
  }

  const mode = resolveConsultationDeliveryMode(context?.env);

  if (mode === 'unavailable') {
    return {
      status: 503,
      body: {
        ok: false,
        code: 'INTEGRATION_UNAVAILABLE',
        message: `Online consultation requests are not yet connected to our scheduling system. Please call ${fallbackPhone.display} directly to request a consultation.`,
        fallbackPhone,
      },
    };
  }

  const requestId = crypto.randomUUID();

  if (mode === 'demo') {
    recordSubmissionId(payload.submissionId, now);
    const shortId = requestId.slice(0, 8).toUpperCase();
    return {
      status: 200,
      body: {
        ok: true,
        mode: 'demo',
        referenceId: `DEMO-${shortId}`,
        message: `Development / demo mode: your request passed validation, but was NOT delivered to DaniCare CRM or Danielle Karten. To schedule a real consultation, please call ${fallbackPhone.display}.`,
        fallbackPhone,
      },
    };
  }

  try {
    const result = await submitConsultationToCrm(payload, requestId, {
      env: context?.env,
      fetchImpl: context?.fetchImpl,
    });
    recordSubmissionId(payload.submissionId, now);

    return {
      status: 201,
      body: {
        ok: true,
        mode: 'crm',
        referenceId: result.referenceId,
        message:
          'Thank you. Your consultation request has been received. Danielle Karten, NP, AGPCNP-BC will review your preferred contact details and follow up to coordinate scheduling.',
        fallbackPhone,
      },
    };
  } catch (error) {
    const statusCode =
      error instanceof CrmIntegrationError ? error.statusCode : 502;
    return {
      status: statusCode,
      body: {
        ok: false,
        code: 'SUBMISSION_FAILED',
        message: `We could not complete your online request right now. Your details were not sent. Please try again or call ${fallbackPhone.display}.`,
        fallbackPhone,
      },
    };
  }
}
