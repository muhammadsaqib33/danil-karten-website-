import { describe, expect, it } from 'vitest';
import {
  consultationSchema,
  mapConsultationValidationErrors,
} from '@/lib/validations/consultation';

const BASE_VALID = {
  fullName: 'Jane Doe',
  preferredContactMethod: 'phone' as const,
  phone: '917-555-0199',
  email: '',
  treatmentInterest: 'general_consultation',
  preferredContactTime: 'morning' as const,
  contactAcknowledgement: true,
  marketingOptIn: false,
  website: '',
  submissionId: 'req-synthetic-12345678',
};

describe('consultationSchema validation', () => {
  it('accepts valid phone-only consultation request without email or marketing opt-in', () => {
    const result = consultationSchema.safeParse(BASE_VALID);
    expect(result.success).toBe(true);
  });

  it('accepts valid email-only consultation request without phone', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      preferredContactMethod: 'email',
      phone: '',
      email: 'synthetic@example.test',
    });
    expect(result.success).toBe(true);
  });

  it('requires phone when preferredContactMethod is phone', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      preferredContactMethod: 'phone',
      phone: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = mapConsultationValidationErrors(result.error.issues);
      expect(errors.phone).toBeDefined();
      expect(errors.email).toBeUndefined();
    }
  });

  it('requires email when preferredContactMethod is email', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      preferredContactMethod: 'email',
      phone: '',
      email: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = mapConsultationValidationErrors(result.error.issues);
      expect(errors.email).toBeDefined();
      expect(errors.phone).toBeUndefined();
    }
  });

  it('requires both phone and email when preferredContactMethod is either', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      preferredContactMethod: 'either',
      phone: '917-555-0199',
      email: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = mapConsultationValidationErrors(result.error.issues);
      expect(errors.email).toBeDefined();
    }
  });

  it('requires contactAcknowledgement to be true', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      contactAcknowledgement: false,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = mapConsultationValidationErrors(result.error.issues);
      expect(errors.contactAcknowledgement).toBeDefined();
    }
  });

  it('rejects malformed email and short phone numbers', () => {
    const result = consultationSchema.safeParse({
      ...BASE_VALID,
      preferredContactMethod: 'either',
      phone: '12345',
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = mapConsultationValidationErrors(result.error.issues);
      expect(errors.phone).toBeDefined();
      expect(errors.email).toBeDefined();
    }
  });
});
