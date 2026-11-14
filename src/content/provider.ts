import type { ApprovedImage } from '@/types/treatment';

export interface ProviderProfile {
  fullName: string;
  credentials: string;
  displayNameWithCredentials: string;
  roleLabel: string;
  /** Approved authentic portrait of Danielle Karten, NP, AGPCNP-BC (production). */
  portrait?: ApprovedImage;
  /** Preview-only placeholder portrait; never shown in production mode. */
  placeholderPortrait?: ApprovedImage & { placeholderNotice: string };
  shortIntro: string;
  /**
   * Approved provider biography. Keep undefined until supplied and approved by
   * Danielle Karten, NP, AGPCNP-BC — never invent education or career history.
   */
  approvedBiography?: string[];
  carePhilosophy: {
    status: 'draft' | 'approved';
    heading: string;
    paragraphs: string[];
  };
}

export const providerProfile: ProviderProfile = {
  fullName: 'Danielle Karten',
  credentials: 'NP, AGPCNP-BC',
  displayNameWithCredentials: 'Danielle Karten, NP, AGPCNP-BC',
  roleLabel: 'Nurse Practitioner',
  portrait: undefined,
  placeholderPortrait: {
    src: '/images/provider/placeholder-portrait.jpg',
    alt: 'Clinician portrait in deep emerald tailoring in soft clinic daylight',
    width: 896,
    height: 1200,
    objectPosition: '50% 20%',
    placeholderNotice:
      "Placeholder portrait — replace with Danielle's photograph.",
  },
  shortIntro:
    'Provides individualized aesthetic consultations and nurse practitioner–led care in New York, NY, centered on careful clinical assessment, candid communication, and subtle, natural-looking outcomes.',
  approvedBiography: undefined,
  carePhilosophy: {
    status: 'draft',
    heading: 'Care Philosophy',
    paragraphs: [
      'Aesthetic care works best when it starts with careful listening. Every consultation is designed to understand your personal goals, answer questions candidly, and evaluate whether a given approach is clinically appropriate for you.',
      'Treatment plans are developed conservatively and collaboratively, prioritizing clear expectations, informed consent, and attentive follow-up.',
    ],
  },
};

export function getProviderDisplayPortrait(isPreviewMode: boolean): {
  image: ApprovedImage;
  isPlaceholder: boolean;
  notice?: string;
} | null {
  if (providerProfile.portrait) {
    return {
      image: providerProfile.portrait,
      isPlaceholder: false,
    };
  }

  if (isPreviewMode && providerProfile.placeholderPortrait) {
    return {
      image: providerProfile.placeholderPortrait,
      isPlaceholder: true,
      notice: providerProfile.placeholderPortrait.placeholderNotice,
    };
  }

  return null;
}
