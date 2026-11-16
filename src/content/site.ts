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
  /** Confirmed client practice brand name from daniskinlab.siterubix.com and verified Instagram. */
  displayName: 'Dani Skin Lab',
  isProvisionalBrandName: false,
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
   * Verified public social links from client materials & daniskinlab.siterubix.com.
   */
  socialLinks: [
    {
      platform: 'Instagram',
      label: '@dani.skinlab_injector',
      href: 'https://www.instagram.com/dani.skinlab_injector/',
    },
  ] as SocialLink[],
  /**
   * Authentic approved patient testimonials from daniskinlab.siterubix.com.
   */
  testimonials: [
    {
      id: 'testimonial-1',
      quote:
        'Dani is incredible! She has such a gentle touch and truly listens to what you want. My results look so natural and refreshed.',
      attribution: 'Jessica R. · New York, NY',
      approvedForPublicDisplay: true,
    },
    {
      id: 'testimonial-2',
      quote:
        'I wouldn’t trust anyone else with my face! Dani’s knowledge and eye for balance are unmatched. She’s the best in NYC.',
      attribution: 'Michelle T. · New York, NY',
      approvedForPublicDisplay: true,
    },
    {
      id: 'testimonial-3',
      quote:
        'Professional, caring and extremely talented. Dani made me feel so comfortable and confident in my skin again.',
      attribution: 'Lauren M. · New York, NY',
      approvedForPublicDisplay: true,
    },
  ] as TestimonialItem[],
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
    defaultTitle: 'Dani Skin Lab | Aesthetic Medicine in New York, NY',
    titleTemplate: '%s | Dani Skin Lab',
    description:
      'Personalized aesthetic care and consultations with Danielle Karten, NP, AGPCNP-BC in New York, NY. Botox, Revanesse dermal fillers, PDRN, and advanced skin revitalization.',
  },
} as const;

export const homeContent = {
  hero: {
    eyebrow: 'Nurse Practitioner–Led Care · New York',
    heading: 'Natural. Refined. Confident.',
    supportingCopy:
      'Personalized aesthetic treatments designed for subtle, natural-looking results that help you look refreshed, never overdone.',
  },
  introStrip: {
    providerName: 'Danielle Karten',
    credentials: 'NP, AGPCNP-BC',
    location: 'New York, NY',
    settingLabel: 'Private Clinical Suite',
  },
  careApproach: {
    eyebrow: 'Our Core Pillars',
    heading: 'Four principles guiding every treatment',
    intro:
      'Providing natural, refined aesthetic treatments in a comfortable, discreet, and professional environment.',
    pillars: [
      {
        number: '01',
        title: 'Safe & Medical Environment',
        description:
          'Every procedure is performed under strict medical safety standards by a board-certified Nurse Practitioner in a private, pristine clinical suite.',
      },
      {
        number: '02',
        title: 'High Quality Products',
        description:
          'We exclusively utilize premier FDA-approved injectables, Revanesse® dermal fillers, and scientifically verified cellular regenerative therapies.',
      },
      {
        number: '03',
        title: 'Personalized Care',
        description:
          'Dani never rushes appointments. Every visit is an unhurried, one-on-one collaboration to tailor treatments to your facial anatomy and lifestyle.',
      },
      {
        number: '04',
        title: 'Natural Beautiful Results',
        description:
          'Subtle enhancements designed to harmonize with your features so you leave looking refreshed, radiant, and confident—never overdone.',
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
