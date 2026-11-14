export type PreferredContactMethod = 'phone' | 'email' | 'either';

export type PreferredContactTime =
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'no_preference';

export type ConsultationDeliveryMode = 'crm' | 'demo' | 'unavailable';

export interface ConsultationRequestPayload {
  fullName: string;
  preferredContactMethod: PreferredContactMethod;
  phone?: string;
  email?: string;
  treatmentInterest?: string;
  preferredContactTime?: PreferredContactTime;
  contactAcknowledgement: boolean;
  marketingOptIn: boolean;
  /** Anti-spam honeypot field; must remain empty. */
  website?: string;
  /** Client-generated idempotency identifier to prevent duplicate submissions. */
  submissionId: string;
}

export type ConsultationFieldName =
  | 'fullName'
  | 'preferredContactMethod'
  | 'phone'
  | 'email'
  | 'treatmentInterest'
  | 'preferredContactTime'
  | 'contactAcknowledgement'
  | 'marketingOptIn';

export type ConsultationFieldErrors = Partial<
  Record<ConsultationFieldName, string>
>;

export interface ConsultationSuccessResponse {
  ok: true;
  mode: 'crm' | 'demo';
  referenceId: string;
  message: string;
  fallbackPhone: {
    display: string;
    href: string;
  };
}

export interface ConsultationErrorResponse {
  ok: false;
  code:
    | 'VALIDATION_ERROR'
    | 'RATE_LIMITED'
    | 'DUPLICATE_SUBMISSION'
    | 'INTEGRATION_UNAVAILABLE'
    | 'SUBMISSION_FAILED';
  message: string;
  fieldErrors?: ConsultationFieldErrors;
  fallbackPhone: {
    display: string;
    href: string;
  };
}

export type ConsultationApiResponse =
  | ConsultationSuccessResponse
  | ConsultationErrorResponse;
