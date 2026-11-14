import type {
  ConsultationDeliveryMode,
  ConsultationRequestPayload,
} from '@/types/consultation';

export interface CrmConsultationIntakeDto {
  source: 'public_website';
  requestId: string;
  submittedAt: string;
  contact: {
    fullName: string;
    preferredMethod: ConsultationRequestPayload['preferredContactMethod'];
    phone: string | null;
    email: string | null;
    preferredContactTime: NonNullable<
      ConsultationRequestPayload['preferredContactTime']
    >;
  };
  interest: {
    treatmentInterest: string | null;
  };
  consents: {
    contactAcknowledgement: boolean;
    marketingOptIn: boolean;
    marketingOptInRecordedAt: string | null;
  };
}

export interface CrmDeliveryResult {
  accepted: true;
  referenceId: string;
}

export class CrmIntegrationError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode = 502) {
    super(message);
    this.name = 'CrmIntegrationError';
    this.statusCode = statusCode;
  }
}

export function isValidCrmUrl(
  rawUrl: string | undefined,
  nodeEnv: string | undefined = process.env.NODE_ENV,
): boolean {
  if (!rawUrl) {
    return false;
  }

  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol === 'https:') {
      return true;
    }
    if (
      nodeEnv !== 'production' &&
      parsed.protocol === 'http:' &&
      (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1')
    ) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function resolveConsultationDeliveryMode(
  env: NodeJS.ProcessEnv = process.env,
): ConsultationDeliveryMode {
  const configured = env.CONSULTATION_DELIVERY_MODE?.trim().toLowerCase();

  if (configured === 'unavailable') {
    return 'unavailable';
  }

  if (configured === 'demo') {
    return 'demo';
  }

  if (configured === 'crm') {
    const hasValidUrl = isValidCrmUrl(env.CRM_API_URL, env.NODE_ENV);
    const hasKey = Boolean(env.CRM_API_KEY?.trim());
    return hasValidUrl && hasKey ? 'crm' : 'unavailable';
  }

  // Default behavior when CONSULTATION_DELIVERY_MODE is unset:
  // If valid CRM credentials exist, use crm; otherwise demo in dev/test and unavailable in production.
  if (
    isValidCrmUrl(env.CRM_API_URL, env.NODE_ENV) &&
    Boolean(env.CRM_API_KEY?.trim())
  ) {
    return 'crm';
  }

  return env.NODE_ENV === 'production' ? 'unavailable' : 'demo';
}

export function buildCrmConsultationDto(
  payload: ConsultationRequestPayload,
  requestId: string,
  submittedAt: string = new Date().toISOString(),
): CrmConsultationIntakeDto {
  return {
    source: 'public_website',
    requestId,
    submittedAt,
    contact: {
      fullName: payload.fullName,
      preferredMethod: payload.preferredContactMethod,
      phone: payload.phone ?? null,
      email: payload.email ?? null,
      preferredContactTime: payload.preferredContactTime ?? 'no_preference',
    },
    interest: {
      treatmentInterest: payload.treatmentInterest ?? null,
    },
    consents: {
      contactAcknowledgement: payload.contactAcknowledgement,
      marketingOptIn: payload.marketingOptIn,
      marketingOptInRecordedAt: payload.marketingOptIn ? submittedAt : null,
    },
  };
}

export async function submitConsultationToCrm(
  payload: ConsultationRequestPayload,
  requestId: string,
  options?: {
    env?: NodeJS.ProcessEnv;
    fetchImpl?: typeof fetch;
  },
): Promise<CrmDeliveryResult> {
  const env = options?.env ?? process.env;
  const fetchImpl = options?.fetchImpl ?? fetch;

  const crmUrl = env.CRM_API_URL?.trim();
  const crmApiKey = env.CRM_API_KEY?.trim();

  if (!isValidCrmUrl(crmUrl, env.NODE_ENV) || !crmApiKey || !crmUrl) {
    throw new CrmIntegrationError(
      'CRM integration is not properly configured.',
      503,
    );
  }

  const dto = buildCrmConsultationDto(payload, requestId);

  let response: Response;
  try {
    response = await fetchImpl(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${crmApiKey}`,
        'X-Request-Id': requestId,
        'X-Idempotency-Key': payload.submissionId,
      },
      body: JSON.stringify(dto),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    throw new CrmIntegrationError(
      'Unable to reach consultation scheduling service.',
      502,
    );
  }

  if (!response.ok) {
    throw new CrmIntegrationError(
      'Consultation scheduling service rejected or failed the request.',
      response.status >= 500 ? 502 : 400,
    );
  }

  try {
    const body = (await response.json()) as { referenceId?: unknown };
    const referenceId =
      typeof body.referenceId === 'string' && body.referenceId.trim().length > 0
        ? body.referenceId.trim()
        : requestId;

    return {
      accepted: true,
      referenceId,
    };
  } catch {
    return {
      accepted: true,
      referenceId: requestId,
    };
  }
}
