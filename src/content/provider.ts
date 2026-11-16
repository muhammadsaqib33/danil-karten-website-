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
  roleLabel: 'Nurse Practitioner & Aesthetic Specialist',
  portrait: {
    src: '/images/provider/danielle-karten.jpg',
    alt: 'Danielle Karten, NP, AGPCNP-BC in clinic consultation suite',
    width: 840,
    height: 1024,
    objectPosition: '50% 22%',
  },
  placeholderPortrait: {
    src: '/images/provider/danielle-karten.jpg',
    alt: 'Danielle Karten, NP, AGPCNP-BC in clinic consultation suite',
    width: 840,
    height: 1024,
    objectPosition: '50% 22%',
    placeholderNotice: '',
  },
  shortIntro:
    'With advanced clinical training and a passion for natural beauty, Dani creates personalized treatment plans that enhance your natural features while keeping you looking like you — refreshed, confident, and never overdone.',
  approvedBiography: [
    'Danielle Karten, NP, AGPCNP-BC is a board-certified Nurse Practitioner and aesthetic injector based in New York City, specializing in natural facial balancing, neuromodulators, advanced dermal fillers, and regenerative skin therapies.',
    'Dani brings together rigorous clinical training, advanced medical knowledge, and an artistic eye for facial proportion. Her philosophy is rooted in the belief that cosmetic treatments should always enhance what makes you uniquely beautiful rather than following generic trends.',
    'In her private New York clinical suite, Dani never rushes appointments. Every client receives an unhurried, one-on-one consultation, a customized anatomical treatment roadmap, and attentive follow-up care in a comfortable, discreet, and professional environment.',
  ],
  carePhilosophy: {
    status: 'approved',
    heading: 'Artistry, Precision, and Clinical Safety',
    paragraphs: [
      'Every face tells a story, and the most beautiful results are those that look effortless and undetectable. Danielle believes in subtle, measured enhancements that preserve your authentic expression and facial movement.',
      'By combining medical-grade safety standards, premier FDA-approved products like Revanesse®, and individualized anatomical mapping, Dani ensures that every treatment delivers refreshed, confident, and lasting refinement.',
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
