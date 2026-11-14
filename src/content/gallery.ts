import type { BeforeAfterComparison, GalleryItem } from '@/types/gallery';

export const DEMO_COMPARISON_NOTICE = '';

/**
 * Six demo Before & After comparison layout entries.
 *
 * IMPORTANT COMPLIANCE RULE:
 * Until separately authorized, clinically accurate before-and-after patient pairs
 * are supplied by the owner, each entry intentionally displays the SAME reference
 * image in both Before and After panels (`isLayoutDemo: true`) rather than
 * altering facial features or pairing unrelated individuals.
 *
 * In `CONTENT_MODE=production`, all `isDemo: true` or `publicationStatus: 'draft'`
 * items are excluded automatically.
 */
export const comparisonsData: BeforeAfterComparison[] = [
  {
    id: 'comp-neuromodulators',
    treatmentSlug: 'neuromodulators',
    treatmentLabel: 'Botox & Dysport',
    category: 'Injectables',
    title: 'Botox & Dysport',
    summary:
      'Conservative neuromodulator planning focused on softened dynamic expression lines while preserving natural facial movement.',
    beforeImage: {
      src: '/images/comparisons/comparison-ref-portrait-1.jpg',
      alt: 'Before panel — facial reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/comparisons/comparison-ref-portrait-1.jpg',
      alt: 'After panel — facial reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Tailored placement and conservative dosing designed around natural facial expression.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-HT0IEUFSBY',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'comp-dermal-fillers',
    treatmentSlug: 'dermal-fillers',
    treatmentLabel: 'Dermal Fillers',
    category: 'Injectables',
    title: 'Dermal Fillers',
    summary:
      'Subtle structural support evaluated across three-quarter facial proportions to restore balanced contour.',
    beforeImage: {
      src: '/images/comparisons/comparison-ref-portrait-2.jpg',
      alt: 'Before panel — three-quarter facial reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/comparisons/comparison-ref-portrait-2.jpg',
      alt: 'After panel — three-quarter facial reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Anatomical planning focused on cohesive midface support and refined, natural transitions.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-3AECYIAEDE',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'comp-biostimulators',
    treatmentSlug: 'biostimulators',
    treatmentLabel: 'Biostimulators',
    category: 'Injectables',
    title: 'Biostimulators',
    summary:
      'Gradual, staged biostimulator protocols designed to reinforce underlying dermal structure over time.',
    beforeImage: {
      src: '/images/treatments/biostimulators.jpg',
      alt: 'Before panel — facial contour reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/treatments/biostimulators.jpg',
      alt: 'After panel — facial contour reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Gradual collagen support developed across personalized follow-up appointments.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/beauty-skincare-LRSAT4NCLS',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'comp-microneedling',
    treatmentSlug: 'microneedling',
    treatmentLabel: 'Microneedling',
    category: 'Skin & Regenerative',
    title: 'Microneedling',
    summary:
      'Collagen induction consultations centered on improving skin texture, clarity, and barrier resilience.',
    beforeImage: {
      src: '/images/gallery/gallery-skin-detail.jpg',
      alt: 'Before panel — skin texture reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/gallery/gallery-skin-detail.jpg',
      alt: 'After panel — skin texture reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Guided skin remodeling plans tailored to texture, sensitivity, and recovery tolerance.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-ETWN6UD9US',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'comp-prp',
    treatmentSlug: 'prp',
    treatmentLabel: 'PRP',
    category: 'Skin & Regenerative',
    title: 'PRP',
    summary:
      'Autologous platelet-rich plasma consultations supporting overall complexion radiance and skin quality.',
    beforeImage: {
      src: '/images/comparisons/comparison-ref-portrait-1.jpg',
      alt: 'Before panel — complexion reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/comparisons/comparison-ref-portrait-1.jpg',
      alt: 'After panel — complexion reference profile',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Regenerative treatment planning focused on balanced skin tone and natural luminosity.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-HT0IEUFSBY',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'comp-hair-treatments',
    treatmentSlug: 'hair-treatments',
    treatmentLabel: 'Hair Treatments',
    category: 'Scalp & Hair',
    title: 'Hair Treatments',
    summary:
      'Non-surgical scalp and hair evaluation tailored around clinical suitability and longitudinal progress.',
    beforeImage: {
      src: '/images/treatments/hair-treatments.jpg',
      alt: 'Before panel — hair and scalp reference profile',
      width: 960,
      height: 771,
      objectPosition: '50% 25%',
    },
    afterImage: {
      src: '/images/treatments/hair-treatments.jpg',
      alt: 'After panel — hair and scalp reference profile',
      width: 960,
      height: 771,
      objectPosition: '50% 25%',
    },
    caption:
      'Individualized scalp wellness protocols reviewed step by step with Danielle Karten, NP.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: true,
    publicationStatus: 'draft',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-hair-ILP6CFYHQI',
      attributionRequirements: 'CC0 Public Domain Dedication (Magdalena via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
];

/**
 * Practice & Experience editorial gallery items (6–8 images for /gallery and homepage grid).
 * Clinic interiors are explicitly flagged as illustrative preview imagery until
 * Danielle Karten supplies verified photos of her practice space.
 */
export const galleryItemsData: GalleryItem[] = [
  {
    id: 'gal-consultation',
    category: 'Consultation',
    title: 'Consultation Seating',
    image: {
      src: '/images/gallery/gallery-consultation.jpg',
      alt: 'Light-filled consultation seating with pale neutral upholstery and green botanicals',
      width: 960,
      height: 640,
      objectPosition: '50% 50%',
    },
    caption:
      'Calm consultation atmosphere designed for private, unhurried aesthetic planning.',
    isDemo: true,
    isIllustrativeEnvironment: true,
    publicationStatus: 'draft',
    aspectVariant: 'wide',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/couch-furniture-TQNWBTLHLY',
      attributionRequirements: 'CC0 Public Domain Dedication (Kristin Hardwick via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-botanicals',
    category: 'Treatment Detail',
    title: 'Apothecary & Linen Detail',
    image: {
      src: '/images/gallery/gallery-botanicals.jpg',
      alt: 'Glass skincare bottles arranged with white blossoms on warm linen and stone',
      width: 960,
      height: 640,
      objectPosition: '50% 50%',
    },
    caption:
      'Pairing thoughtful clinical care with a calm, restorative sensory experience.',
    isDemo: true,
    isIllustrativeEnvironment: false,
    publicationStatus: 'draft',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/aromatherapy-spa-5A5JLDXM4R',
      attributionRequirements: 'CC0 Public Domain Dedication (Marina Pershina via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-suite',
    category: 'Practice & Atmosphere',
    title: 'Minimalist Suite Seating',
    image: {
      src: '/images/gallery/gallery-suite.jpg',
      alt: 'Minimalist sunlit architectural waiting bench in calm natural light',
      width: 960,
      height: 640,
      objectPosition: '50% 50%',
    },
    caption:
      'Quiet, composed suite architecture created for comfort and confidentiality.',
    isDemo: true,
    isIllustrativeEnvironment: true,
    publicationStatus: 'draft',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/sunlight-couch-NB6ISAF275',
      attributionRequirements: 'CC0 Public Domain Dedication (Patrick McMahon via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-lounge',
    category: 'Practice & Atmosphere',
    title: 'Sunlit Lounge Seating',
    image: {
      src: '/images/gallery/gallery-lounge.jpg',
      alt: 'Sunlit consultation lounge with upholstered seating and fresh greenery on oak table',
      width: 960,
      height: 1438,
      objectPosition: '50% 50%',
    },
    caption:
      'Calm, appointment-only lounge setting away from the pace of busy clinics.',
    isDemo: true,
    isIllustrativeEnvironment: true,
    publicationStatus: 'draft',
    aspectVariant: 'portrait',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/minimalist-interior-6HFG9L6JGC',
      attributionRequirements: 'CC0 Public Domain Dedication (Travel Adventures via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-skin-detail',
    category: 'Editorial & Skin',
    title: 'Routine Skincare Reference',
    image: {
      src: '/images/gallery/gallery-skin-detail.jpg',
      alt: 'Editorial portrait in neutral daylight illustrating everyday skin barrier care',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    caption:
      'Emphasizing healthy skin quality, natural expression, and subtle refinement.',
    isDemo: true,
    isIllustrativeEnvironment: false,
    publicationStatus: 'draft',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-ETWN6UD9US',
      attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-preparation',
    category: 'Treatment Detail',
    title: 'Natural Linen & Botanicals',
    image: {
      src: '/images/gallery/gallery-preparation.jpg',
      alt: 'Rolled natural linens, white blossoms, and smooth stones on textured stone surface',
      width: 960,
      height: 641,
      objectPosition: '50% 40%',
    },
    caption:
      'Attentive treatment preparation combining high clinical standards with thoughtful hospitality.',
    isDemo: true,
    isIllustrativeEnvironment: false,
    publicationStatus: 'draft',
    aspectVariant: 'wide',
    sourceInfo: {
      originalSourceUrl: 'https://stocksnap.io/photo/spa-concept-ZCLKDUY2CZ',
      attributionRequirements: 'CC0 Public Domain Dedication (Healthy Living via StockSnap)',
      licenseReference: 'CC0 1.0 Universal (StockSnap)',
    },
  },
  {
    id: 'gal-prp-detail',
    category: 'Treatment Detail',
    title: 'Clinical Preparation Still Life',
    image: {
      src: '/images/treatments/prp.jpg',
      alt: 'Sterile medical glass vial resting on dark stone tray in calm clinic lighting',
      width: 960,
      height: 720,
      objectPosition: '50% 50%',
    },
    caption:
      'Focused regenerative skincare and barrier-supportive post-treatment guidance.',
    isDemo: true,
    isIllustrativeEnvironment: true,
    publicationStatus: 'draft',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'internal-generated-preview-asset',
      attributionRequirements: 'Generated preview illustration (pending approved practice photography)',
      licenseReference: 'Internal preview asset',
    },
  },
];

export function getComparisonsForView(
  isPreviewMode: boolean,
): BeforeAfterComparison[] {
  if (isPreviewMode) {
    return comparisonsData;
  }
  return comparisonsData.filter(
    (item) => item.publicationStatus === 'approved' && !item.isDemo,
  );
}

export function getGalleryItemsForView(isPreviewMode: boolean): GalleryItem[] {
  if (isPreviewMode) {
    return galleryItemsData;
  }
  return galleryItemsData.filter(
    (item) => item.publicationStatus === 'approved' && !item.isDemo,
  );
}
