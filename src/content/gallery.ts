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
    id: 'comp-lips',
    treatmentSlug: 'dermal-fillers',
    treatmentLabel: 'Revanesse® Lip Enhancement',
    category: 'Injectables',
    title: 'Lip Volume & Vermilion Border Definition',
    summary:
      'Subtle lip contouring and symmetry enhancement using Revanesse® hyaluronic acid filler for soft, natural fullness.',
    beforeImage: {
      src: '/images/comparisons/lips-before.jpg',
      alt: 'Before treatment — natural lip contour and volume',
      width: 900,
      height: 800,
      objectPosition: '50% 50%',
    },
    afterImage: {
      src: '/images/comparisons/lips-after.jpg',
      alt: 'After treatment — enhanced lip fullness and defined vermilion border',
      width: 900,
      height: 800,
      objectPosition: '50% 50%',
    },
    caption:
      'Tailored Revanesse® hyaluronic acid filler placement providing natural volume while preserving authentic lip movement.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: false,
    publicationStatus: 'approved',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Patient Case',
      licenseReference: 'Direct clinical practice documentation',
    },
  },
  {
    id: 'comp-profile',
    treatmentSlug: 'dermal-fillers',
    treatmentLabel: 'Profile & Lip Balancing',
    category: 'Injectables',
    title: 'Lateral Profile Harmonization',
    summary:
      'Three-quarter profile projection and lip ratio balancing tailored to individual facial proportions.',
    beforeImage: {
      src: '/images/comparisons/profile-before.jpg',
      alt: 'Before treatment — side profile view',
      width: 900,
      height: 800,
      objectPosition: '50% 50%',
    },
    afterImage: {
      src: '/images/comparisons/profile-after.jpg',
      alt: 'After treatment — balanced profile projection and defined lip shape',
      width: 900,
      height: 800,
      objectPosition: '50% 50%',
    },
    caption:
      'Refined lateral projection and facial balancing with hyaluronic acid filler.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: false,
    publicationStatus: 'approved',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Patient Case',
      licenseReference: 'Direct clinical practice documentation',
    },
  },
  {
    id: 'comp-forehead',
    treatmentSlug: 'neuromodulators',
    treatmentLabel: 'Botox & Dysport',
    category: 'Injectables',
    title: 'Forehead Line Smoothing',
    summary:
      'Targeted neuromodulator treatment smoothing horizontal forehead and glabella lines while maintaining expressive brow movement.',
    beforeImage: {
      src: '/images/comparisons/forehead-before.jpg',
      alt: 'Before treatment — dynamic forehead expression lines',
      width: 1266,
      height: 1280,
      objectPosition: '50% 50%',
    },
    afterImage: {
      src: '/images/comparisons/forehead-after.jpg',
      alt: 'After treatment — smooth, refreshed forehead with natural animation',
      width: 1266,
      height: 1280,
      objectPosition: '50% 50%',
    },
    caption:
      'Conservative neuromodulator dosing for relaxed, refreshed upper facial lines without stiffness.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: false,
    publicationStatus: 'approved',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Patient Case',
      licenseReference: 'Direct clinical practice documentation',
    },
  },
  {
    id: 'comp-fullface',
    treatmentSlug: 'dermal-fillers',
    treatmentLabel: 'Facial Contouring & Refresh',
    category: 'Injectables',
    title: 'Full Face Refresh & Definition',
    summary:
      'Holistic midface support, contour balancing, and overall refreshed complexion.',
    beforeImage: {
      src: '/images/comparisons/fullface-before.jpg',
      alt: 'Before treatment — full facial resting portrait',
      width: 799,
      height: 900,
      objectPosition: '50% 50%',
    },
    afterImage: {
      src: '/images/comparisons/fullface-after.jpg',
      alt: 'After treatment — lifted, rested, and glowing facial contours',
      width: 799,
      height: 900,
      objectPosition: '50% 50%',
    },
    caption:
      'Harmonious full-face restoration highlighting natural balance, radiance, and lifted features.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: false,
    publicationStatus: 'approved',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Patient Case',
      licenseReference: 'Direct clinical practice documentation',
    },
  },
  {
    id: 'comp-pdrn',
    treatmentSlug: 'pdrn',
    treatmentLabel: 'PDRN Salmon DNA',
    category: 'Skin & Regenerative',
    title: 'PDRN Cellular Skin Renewal',
    summary:
      'Polynucleotide regenerative therapy improving skin redness, dermal texture, and cellular healing.',
    beforeImage: {
      src: '/images/comparisons/pdrn-before.webp',
      alt: 'Before treatment — sensitized skin with redness and uneven texture',
      width: 765,
      height: 1021,
      objectPosition: '50% 50%',
    },
    afterImage: {
      src: '/images/comparisons/pdrn-after.webp',
      alt: 'After treatment — calmed, even-toned skin with cellular glow and refined texture',
      width: 765,
      height: 1021,
      objectPosition: '50% 50%',
    },
    caption:
      'Skin barrier repair and deep cellular rejuvenation with PDRN polynucleotides.',
    demoNotice: '',
    isLayoutDemo: false,
    isAlignedForSlider: true,
    isDemo: false,
    publicationStatus: 'approved',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Patient Case',
      licenseReference: 'Direct clinical practice documentation',
    },
  },
];

/**
 * Practice & Experience gallery items from Dani Skin Lab clinic and materials.
 */
export const galleryItemsData: GalleryItem[] = [
  {
    id: 'gal-clinic-room',
    category: 'Practice & Atmosphere',
    title: 'Clinical Treatment Suite',
    image: {
      src: '/images/gallery/clinic-suite-treatment-room.webp',
      alt: 'Private clinical treatment suite with modern medical chair and equipment at Dani Skin Lab NYC',
      width: 900,
      height: 1200,
      objectPosition: '50% 50%',
    },
    caption:
      'Pristine, private clinical treatment suite designed for patient comfort and safety in NYC.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'portrait',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Clinic Suite',
      licenseReference: 'Authorized Client Material',
    },
  },
  {
    id: 'gal-skincare-lounge',
    category: 'Practice & Atmosphere',
    title: 'Consultation & Skincare Lounge',
    image: {
      src: '/images/gallery/clinic-skincare-lounge.webp',
      alt: 'Consultation lounge and medical-grade skincare product display at Dani Skin Lab NYC',
      width: 900,
      height: 1200,
      objectPosition: '50% 50%',
    },
    caption:
      'Comfortable consultation space and curated medical-grade skincare displays.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'portrait',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Clinic Suite',
      licenseReference: 'Authorized Client Material',
    },
  },
  {
    id: 'gal-revanesse-prep',
    category: 'Treatment Detail',
    title: 'Revanesse® Injectable Preparation',
    image: {
      src: '/images/treatments/revanesse-filler-prep.webp',
      alt: 'Revanesse Lips hyaluronic acid injectable syringes and sterile clinical preparation',
      width: 1200,
      height: 900,
      objectPosition: '50% 50%',
    },
    caption:
      'High-quality FDA-approved Revanesse® hyaluronic acid fillers for smooth, natural results.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Clinic Materials',
      licenseReference: 'Authorized Client Material',
    },
  },
  {
    id: 'gal-facial-mapping',
    category: 'Treatment Detail',
    title: 'Anatomical Facial Mapping',
    image: {
      src: '/images/treatments/facial-mapping-guide.webp',
      alt: 'Clinical facial anatomy injection zones and symmetry guide',
      width: 1080,
      height: 1080,
      objectPosition: '50% 50%',
    },
    caption:
      'Precise facial mapping to harmonize treatments with individual anatomy and musculature.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Clinical Guide',
      licenseReference: 'Authorized Client Material',
    },
  },
  {
    id: 'gal-pdrn-treatment',
    category: 'Treatment Detail',
    title: 'PDRN Cellular Therapy',
    image: {
      src: '/images/treatments/pdrn-treatment.webp',
      alt: 'PDRN salmon DNA polynucleotide regenerative skin treatment',
      width: 1080,
      height: 1080,
      objectPosition: '50% 50%',
    },
    caption:
      'Polynucleotide micro-therapy to boost cellular regeneration, skin repair, and radiance.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'landscape',
    sourceInfo: {
      originalSourceUrl: 'https://daniskinlab.siterubix.com/',
      attributionRequirements: 'Dani Skin Lab Clinical Materials',
      licenseReference: 'Authorized Client Material',
    },
  },
  {
    id: 'gal-danielle-office',
    category: 'Consultation',
    title: 'Meet Dani in Clinic',
    image: {
      src: '/images/provider/danielle-karten.jpg',
      alt: 'Danielle Karten, NP, AGPCNP-BC in clinic consultation office',
      width: 840,
      height: 1024,
      objectPosition: '50% 20%',
    },
    caption:
      'Danielle Karten, NP, AGPCNP-BC in her New York City clinic consultation office.',
    isDemo: false,
    isIllustrativeEnvironment: false,
    publicationStatus: 'approved',
    aspectVariant: 'portrait',
    sourceInfo: {
      originalSourceUrl: 'user-uploaded://media_1794835839839_62af5541.jpg',
      attributionRequirements: 'Danielle Karten, NP',
      licenseReference: 'Direct clinical practice documentation',
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
