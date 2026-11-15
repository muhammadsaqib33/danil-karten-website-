export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  attribution: string;
  approvedForPublicDisplay: boolean;
}

export interface CareApproachPillar {
  number: string;
  title: string;
  description: string;
}

export interface VisitStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const siteConfig = {
  /** Provisional public display name — update once confirmed by the owner. */
  displayName: 'Dani E Esthetics',
  isProvisionalBrandName: true,
  legalBusinessName: 'Dani E Esthetics LLC',
  /** Approved public location until full street address publication is authorized. */
  publicLocation: 'New York, NY',
  /** Supplied practice phone number. */
  phoneDisplay: '917-855-7737',
  phoneHref: 'tel:+19178557737',
  /** Public email not yet supplied; keep undefined until owner confirms. */
  publicEmail: undefined as string | undefined,
  /** Business hours not yet supplied; keep undefined until owner confirms. */
  businessHours: undefined as string | undefined,
  /**
   * Verified public social links only.
   * Note: Instagram display name "Dani Skin Lab" was noted in client materials,
   * but no verified handle/URL has been supplied yet.
   */
  socialLinks: [] as SocialLink[],
  /**
   * Approved testimonials only. Omit the testimonials section while empty.
   */
  testimonials: [] as TestimonialItem[],
  /** Optional logo image; omitted cleanly until final brand mark is supplied. */
  logo: undefined as
    | { src: string; alt: string; width: number; height: number }
    | undefined,
  navigation: [
    { label: 'Treatments', href: '/treatments' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavLink[],
  primaryCta: {
    label: 'Book Now',
    href: '/contact#consultation-form',
  },
  headerCta: {
    label: 'Book Now',
    href: '/contact#consultation-form',
  },
  secondaryCta: {
    label: 'Explore Treatments',
    href: '/treatments',
  },
  metadata: {
    defaultTitle: 'Dani E Esthetics | Aesthetic Care in New York, NY',
    titleTemplate: '%s | Dani E Esthetics',
    description:
      'Personalized aesthetic consultations with Danielle Karten, NP, AGPCNP-BC, in New York, NY.',
  },
} as const;

export const homeContent = {
  hero: {
    eyebrow: 'Nurse Practitioner–Led Care · New York',
    heading: 'Thoughtful care. A more confident you.',
    supportingCopy:
      'Explore personalized aesthetic care with Danielle Karten, NP, AGPCNP-BC, in New York.',
  },
  introStrip: {
    providerName: 'Danielle Karten',
    credentials: 'NP, AGPCNP-BC',
    location: 'New York, NY',
    settingLabel: 'Private Appointment Practice',
  },
  careApproach: {
    eyebrow: 'Care Approach',
    heading: 'Three principles guiding every visit',
    intro:
      'Aesthetic medicine works best when clinical decisions feel measured, collaborative, and transparent.',
    pillars: [
      {
        number: '01',
        title: 'Listening and understanding',
        description:
          'Every visit starts with an unhurried conversation about your goals, questions, and relevant health considerations before any option is recommended.',
      },
      {
        number: '02',
        title: 'Individualized planning',
        description:
          'Recommendations are shaped around your facial anatomy, skin profile, and pace rather than a standardized checklist.',
      },
      {
        number: '03',
        title: 'Clear communication and follow-up',
        description:
          'Expect candid discussion of realistic outcomes, straightforward aftercare guidance, and appropriate clinical follow-up.',
      },
    ] satisfies CareApproachPillar[],
  },
  visitSteps: {
    eyebrow: 'Your Visit',
    heading: 'From first inquiry to thoughtful follow-up',
    steps: [
      {
        stepNumber: '01',
        title: 'Request consultation',
        description:
          'Share your preferred contact method online or call the practice directly to coordinate an appointment time.',
      },
      {
        stepNumber: '02',
        title: 'Discuss your goals',
        description:
          'Meet with Danielle Karten, NP, AGPCNP-BC to talk through your goals, questions, and medical considerations.',
      },
      {
        stepNumber: '03',
        title: 'Receive an individualized plan',
        description:
          'Review appropriate options, potential risks, and realistic expectations together before deciding on next steps.',
      },
      {
        stepNumber: '04',
        title: 'Treatment and follow-up as appropriate',
        description:
          'When clinically appropriate and mutually agreed upon, receive care alongside clear aftercare and follow-up support.',
      },
    ] satisfies VisitStep[],
  },
  contactCta: {
    eyebrow: 'Consultation',
    heading: 'Begin with a personal consultation',
    body: 'Have questions or want to explore which options may fit your goals? Request a consultation online or reach the practice directly by phone.',
  },
} as const;
