import { z } from 'zod';
import type {
  ConsultationFieldErrors,
  ConsultationFieldName,
  ConsultationRequestPayload,
} from '@/types/consultation';

const PHONE_ALLOWED_REGEX = /^[+\d\s().-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function countDigits(value: string): number {
  return value.replace(/\D/g, '').length;
}

export const consultationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Please enter your full name.')
      .max(100, 'Full name must be 100 characters or fewer.'),
    preferredContactMethod: z.enum(['phone', 'email', 'either'], {
      message: 'Please select a preferred contact method.',
    }),
    phone: z
      .string()
      .trim()
      .max(30, 'Phone number is too long.')
      .optional()
      .or(z.literal('')),
    email: z
      .string()
      .trim()
      .max(160, 'Email address is too long.')
      .optional()
      .or(z.literal('')),
    treatmentInterest: z
      .string()
      .trim()
      .max(100, 'Selected treatment option is too long.')
      .optional()
      .or(z.literal('')),
    preferredContactTime: z
      .enum(['morning', 'afternoon', 'evening', 'no_preference'])
      .optional(),
    contactAcknowledgement: z.boolean().refine((val) => val === true, {
      message:
        'Please confirm that this request is for consultation scheduling only and contains no medical information.',
    }),
    marketingOptIn: z.boolean().default(false),
    website: z.string().max(200).optional().or(z.literal('')),
    submissionId: z
      .string()
      .trim()
      .min(8, 'Invalid submission reference. Please refresh and try again.')
      .max(100, 'Invalid submission reference.'),
  })
  .superRefine((data, ctx) => {
    const needsPhone =
      data.preferredContactMethod === 'phone' ||
      data.preferredContactMethod === 'either';
    const needsEmail =
      data.preferredContactMethod === 'email' ||
      data.preferredContactMethod === 'either';

    const phone = data.phone?.trim() ?? '';
    const email = data.email?.trim() ?? '';

    if (needsPhone && !phone) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'Please enter a phone number for phone follow-up.',
      });
    } else if (phone) {
      const digitCount = countDigits(phone);
      if (!PHONE_ALLOWED_REGEX.test(phone) || digitCount < 10 || digitCount > 15) {
        ctx.addIssue({
          code: 'custom',
          path: ['phone'],
          message: 'Please enter a valid 10-digit phone number.',
        });
      }
    }

    if (needsEmail && !email) {
      ctx.addIssue({
        code: 'custom',
        path: ['email'],
        message: 'Please enter an email address for email follow-up.',
      });
    } else if (email && !EMAIL_REGEX.test(email)) {
      ctx.addIssue({
        code: 'custom',
        path: ['email'],
        message: 'Please enter a valid email address.',
      });
    }
  });

export type ValidatedConsultationInput = z.infer<typeof consultationSchema>;

const KNOWN_FIELDS = new Set<ConsultationFieldName>([
  'fullName',
  'preferredContactMethod',
  'phone',
  'email',
  'treatmentInterest',
  'preferredContactTime',
  'contactAcknowledgement',
  'marketingOptIn',
]);

export function mapConsultationValidationErrors(
  issues: z.core.$ZodIssue[],
): ConsultationFieldErrors {
  const fieldErrors: ConsultationFieldErrors = {};

  for (const issue of issues) {
    const rawKey = issue.path[0];
    if (
      typeof rawKey === 'string' &&
      KNOWN_FIELDS.has(rawKey as ConsultationFieldName)
    ) {
      const field = rawKey as ConsultationFieldName;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
  }

  return fieldErrors;
}

export function normalizeConsultationPayload(
  data: ValidatedConsultationInput,
): ConsultationRequestPayload {
  return {
    fullName: data.fullName.trim(),
    preferredContactMethod: data.preferredContactMethod,
    phone: data.phone?.trim() ? data.phone.trim() : undefined,
    email: data.email?.trim() ? data.email.trim().toLowerCase() : undefined,
    treatmentInterest: data.treatmentInterest?.trim()
      ? data.treatmentInterest.trim()
      : undefined,
    preferredContactTime: data.preferredContactTime ?? 'no_preference',
    contactAcknowledgement: data.contactAcknowledgement,
    marketingOptIn: Boolean(data.marketingOptIn),
    website: data.website?.trim() ?? '',
    submissionId: data.submissionId.trim(),
  };
}
