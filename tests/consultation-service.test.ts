import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  processConsultationRequest,
  resetConsultationServiceStores,
} from '@/lib/server/consultation-service';

const SYNTHETIC_PAYLOAD = {
  fullName: 'Jane Doe',
  preferredContactMethod: 'phone',
  phone: '917-555-0199',
  email: '',
  treatmentInterest: 'general_consultation',
  preferredContactTime: 'afternoon',
  contactAcknowledgement: true,
  marketingOptIn: false,
  website: '',
  submissionId: 'sub-synthetic-0001',
};

describe('processConsultationRequest', () => {
  beforeEach(() => {
    resetConsultationServiceStores();
  });

  it('rejects honeypot spam submissions without calling CRM', async () => {
    const fetchSpy = vi.fn();
    const res = await processConsultationRequest(
      { ...SYNTHETIC_PAYLOAD, website: 'https://spam.example' },
      {
        clientKey: '198.51.100.1',
        env: {
          NODE_ENV: 'production',
          CONSULTATION_DELIVERY_MODE: 'crm',
          CRM_API_URL: 'https://crm.example.test/api/intake',
          CRM_API_KEY: 'secret-token',
        },
        fetchImpl: fetchSpy as unknown as typeof fetch,
      },
    );

    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('returns explicit demo acknowledgement when CRM is not connected in demo mode', async () => {
    const res = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.2',
      env: {
        NODE_ENV: 'development',
        CONSULTATION_DELIVERY_MODE: 'demo',
      },
    });

    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    if (res.body.ok) {
      expect(res.body.mode).toBe('demo');
      expect(res.body.message).toContain('NOT delivered');
      expect(res.body.fallbackPhone.display).toBe('917-855-7737');
    }
  });

  it('returns 503 unavailable in production when CRM credentials are missing', async () => {
    const res = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.3',
      env: {
        NODE_ENV: 'production',
      },
    });

    expect(res.status).toBe(503);
    expect(res.body.ok).toBe(false);
    if (!res.body.ok) {
      expect(res.body.code).toBe('INTEGRATION_UNAVAILABLE');
      expect(res.body.fallbackPhone.display).toBe('917-855-7737');
    }
  });

  it('forwards narrow DTO with Bearer auth to configured HTTPS CRM endpoint', async () => {
    const fetchMock = vi.fn(async () => {
      return new Response(
        JSON.stringify({ accepted: true, referenceId: 'crm_ref_9001' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const res = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.4',
      env: {
        NODE_ENV: 'production',
        CONSULTATION_DELIVERY_MODE: 'crm',
        CRM_API_URL: 'https://crm.example.test/api/consultations',
        CRM_API_KEY: 'super-secret-crm-key',
      },
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    expect(res.status).toBe(201);
    expect(res.body.ok).toBe(true);
    if (res.body.ok) {
      expect(res.body.mode).toBe('crm');
      expect(res.body.referenceId).toBe('crm_ref_9001');
    }

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const call = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(call[0]).toBe('https://crm.example.test/api/consultations');
    const headers = call[1].headers as Record<string, string>;
    expect(headers.Authorization).toBe('Bearer super-secret-crm-key');
    expect(headers['X-Idempotency-Key']).toBe('sub-synthetic-0001');
  });

  it('handles CRM upstream failures safely without leaking internal details', async () => {
    const fetchMock = vi.fn(async () => {
      return new Response('Internal database trace: secret_table_xyz', {
        status: 500,
      });
    });

    const res = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.5',
      env: {
        NODE_ENV: 'production',
        CONSULTATION_DELIVERY_MODE: 'crm',
        CRM_API_URL: 'https://crm.example.test/api/consultations',
        CRM_API_KEY: 'super-secret-crm-key',
      },
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    expect(res.status).toBe(502);
    expect(res.body.ok).toBe(false);
    if (!res.body.ok) {
      expect(res.body.code).toBe('SUBMISSION_FAILED');
      expect(res.body.message).not.toContain('secret_table_xyz');
    }
  });

  it('blocks duplicate submissionId within deduplication window', async () => {
    const env = {
      NODE_ENV: 'development',
      CONSULTATION_DELIVERY_MODE: 'demo',
    } as const;

    const first = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.6',
      now: 1000,
      env,
    });
    expect(first.status).toBe(200);

    const second = await processConsultationRequest(SYNTHETIC_PAYLOAD, {
      clientKey: '198.51.100.6',
      now: 2000,
      env,
    });
    expect(second.status).toBe(409);
    expect(second.body.ok).toBe(false);
    if (!second.body.ok) {
      expect(second.body.code).toBe('DUPLICATE_SUBMISSION');
    }
  });

  it('rate-limits excessive requests from the same client', async () => {
    const env = {
      NODE_ENV: 'development',
      CONSULTATION_DELIVERY_MODE: 'demo',
    } as const;

    for (let i = 0; i < 5; i += 1) {
      const res = await processConsultationRequest(
        { ...SYNTHETIC_PAYLOAD, submissionId: `sub-rate-${i}-abcdef` },
        { clientKey: '198.51.100.7', now: 10_000 + i, env },
      );
      expect(res.status).toBe(200);
    }

    const blocked = await processConsultationRequest(
      { ...SYNTHETIC_PAYLOAD, submissionId: 'sub-rate-6-abcdef' },
      { clientKey: '198.51.100.7', now: 10_010, env },
    );

    expect(blocked.status).toBe(429);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
    expect(blocked.body.ok).toBe(false);
    if (!blocked.body.ok) {
      expect(blocked.body.code).toBe('RATE_LIMITED');
    }
  });
});
