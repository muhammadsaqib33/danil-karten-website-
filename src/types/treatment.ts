export type PublicationStatus = 'draft' | 'approved';
export type ClinicalReviewStatus = 'pending_review' | 'approved';

export interface ApprovedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface TreatmentFaq {
  question: string;
  answer: string;
}

export interface Treatment {
  slug: string;
  displayName: string;
  /** Optional concise card title when brand/modality names lead in grid cards. */
  cardTitle?: string;
  category: string;
  /** Related options or brand names mentioned in CRM notes, if applicable. */
  relatedOptions?: string[];
  shortDescription: string;
  fullIntroduction: string;
  potentialGoals: string[];
  consultationInvolves: string[];
  whatToExpect: string[];
  generalRecovery: string[];
  risksAndLimitations: string[];
  suitabilityConsiderations: string[];
  faqs: TreatmentFaq[];
  /** Approved production image (only supplied after owner sign-off). */
  image?: ApprovedImage;
  /** Temporary visual preview image (rendered only when CONTENT_MODE=preview). */
  demoImage?: ApprovedImage;
  /** Whether this service appears in the 6-card homepage showcase. */
  isFeatured?: boolean;
  publicationStatus: PublicationStatus;
  clinicalReviewStatus: ClinicalReviewStatus;
  reviewNote?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  requiresClinicalReview?: boolean;
}
