import type { ImageManifestEntry } from '@/types/gallery';
import type { ApprovedImage } from '@/types/treatment';

/**
 * Centralized Image Manifest for Dani E Esthetics.
 *
 * All preview assets are stored locally under `public/images/` for reliability
 * and clean CSP compliance (`img-src 'self' data:`). Replace any demo asset by
 * uploading the approved photograph to `public/images/` and updating its entry
 * below (`isDemo: false`, `publicationStatus: 'approved'`).
 */
export const imageManifest: ImageManifestEntry[] = [
  {
    id: 'hero-editorial',
    localPath: '/images/hero/home-clinic-hero.jpg',
    originalSourceUrl: 'local-generated-demo-asset://home-clinic-hero',
    attributionRequirements: 'None (synthetic editorial demo asset)',
    licenseReference: 'Project-local synthetic demo asset — replace prior to launch',
    role: 'hero',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes:
      'Replace with an owner-approved editorial practice photograph or approved portrait framing (does not represent Danielle personally).',
    width: 1376,
    height: 768,
    objectPosition: 'center center',
  },
  {
    id: 'about-clinic-hero',
    localPath: '/images/hero/about-clinic-hero.jpg',
    originalSourceUrl: 'local-generated-demo-asset://about-clinic-hero',
    attributionRequirements: 'None (synthetic editorial demo asset)',
    licenseReference: 'Project-local synthetic demo asset',
    role: 'hero',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved clinical consultation suite photography.',
    width: 1376,
    height: 768,
    objectPosition: 'center center',
  },
  {
    id: 'contact-hero',
    localPath: '/images/hero/contact-hero.jpg',
    originalSourceUrl: 'local-generated-demo-asset://contact-hero',
    attributionRequirements: 'None (synthetic editorial demo asset)',
    licenseReference: 'Project-local synthetic demo asset',
    role: 'hero',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved reception/suite photography.',
    width: 1376,
    height: 768,
    objectPosition: 'center center',
  },
  {
    id: 'provider-placeholder',
    localPath: '/images/provider/placeholder-portrait.jpg',
    originalSourceUrl: 'local-generated-demo-asset://provider-placeholder',
    attributionRequirements: 'None (synthetic portrait placeholder)',
    licenseReference: 'Project-local synthetic demo asset — replace with Danielle portrait',
    role: 'provider-placeholder',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes:
      'Must be replaced with an authentic, owner-approved portrait of Danielle Karten, NP, AGPCNP-BC before production launch.',
    width: 896,
    height: 1200,
    objectPosition: '50% 20%',
  },
  {
    id: 'treatment-neuromodulators',
    localPath: '/images/treatments/neuromodulators.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-VEP8AYJMNI',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved clinic/editorial photography for neuromodulators.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'treatment-dermal-fillers',
    localPath: '/images/treatments/dermal-fillers.jpg',
    originalSourceUrl: 'local-generated-demo-asset://treatment-dermal-fillers',
    attributionRequirements: 'None (synthetic preview asset)',
    licenseReference: 'Project-local synthetic demo asset',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved clinic/editorial photography for dermal fillers.',
    width: 1200,
    height: 896,
    objectPosition: '50% 25%',
  },
  {
    id: 'treatment-biostimulators',
    localPath: '/images/treatments/biostimulators.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/beauty-skincare-LRSAT4NCLS',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved photography for Sculptra / Radiesse consultations.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'treatment-microneedling',
    localPath: '/images/treatments/microneedling.jpg',
    originalSourceUrl: 'https://www.flickr.com/photos/60168376@N06/14233491001',
    attributionRequirements: 'CC0 Public Domain Dedication (Hotel Costa Calero via Flickr)',
    licenseReference: 'CC0 1.0 Universal (Flickr)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved clinic treatment photography for microneedling.',
    width: 1023,
    height: 683,
    objectPosition: '50% 45%',
  },
  {
    id: 'treatment-prp',
    localPath: '/images/treatments/prp.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/beauty-skincare-U5MEPX1OVV',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved clinic photography for PRP consultations.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'treatment-hair-treatments',
    localPath: '/images/treatments/hair-treatments.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/woman-hair-ILP6CFYHQI',
    attributionRequirements: 'CC0 Public Domain Dedication (Magdalena via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved editorial photography for hair and scalp care.',
    width: 960,
    height: 771,
    objectPosition: '50% 25%',
  },
  {
    id: 'treatment-iv-therapy',
    localPath: '/images/treatments/iv-therapy.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/still-items-8ZYCJ5MGJI',
    attributionRequirements: 'CC0 Public Domain Dedication (Atilla Taskiran via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved suite photography if IV therapy is included at launch.',
    width: 960,
    height: 1440,
    objectPosition: '50% 50%',
  },
  {
    id: 'treatment-chemical-peels',
    localPath: '/images/treatments/chemical-peels.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/beauty-skincare-CC9TYE8VJY',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'treatment',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with approved photography if chemical peels are included at launch.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'gallery-consultation',
    localPath: '/images/gallery/gallery-consultation.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/couch-furniture-TQNWBTLHLY',
    attributionRequirements: 'CC0 Public Domain Dedication (Kristin Hardwick via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Illustrative environment — replace with verified practice room photo when approved.',
    width: 960,
    height: 640,
    objectPosition: '50% 50%',
  },
  {
    id: 'gallery-suite',
    localPath: '/images/gallery/gallery-suite.jpg',
    originalSourceUrl: 'local-generated-demo-asset://gallery-suite',
    attributionRequirements: 'None (synthetic preview asset)',
    licenseReference: 'Project-local synthetic demo asset',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Illustrative environment — replace with verified treatment suite photo when approved.',
    width: 1376,
    height: 768,
    objectPosition: 'center center',
  },
  {
    id: 'gallery-botanicals',
    localPath: '/images/gallery/gallery-botanicals.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/aromatherapy-spa-5A5JLDXM4R',
    attributionRequirements: 'CC0 Public Domain Dedication (Marina Pershina via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with owner-approved skincare or studio detail photography.',
    width: 960,
    height: 640,
    objectPosition: '50% 50%',
  },
  {
    id: 'gallery-skin-detail',
    localPath: '/images/gallery/gallery-skin-detail.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-ETWN6UD9US',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with owner-approved editorial beauty photography.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'gallery-lounge',
    localPath: '/images/gallery/gallery-lounge.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/minimalist-interior-6HFG9L6JGC',
    attributionRequirements: 'CC0 Public Domain Dedication (Travel Adventures via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Illustrative interior — replace with verified clinic reception photo when authorized.',
    width: 960,
    height: 1438,
    objectPosition: '50% 50%',
  },
  {
    id: 'gallery-preparation',
    localPath: '/images/gallery/gallery-preparation.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/spa-concept-ZCLKDUY2CZ',
    attributionRequirements: 'CC0 Public Domain Dedication (Healthy Living via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'gallery',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes: 'Replace with owner-approved clinical tray/treatment preparation photo.',
    width: 960,
    height: 641,
    objectPosition: '50% 40%',
  },
  {
    id: 'comparison-ref-portrait-1',
    localPath: '/images/comparisons/comparison-ref-portrait-1.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-HT0IEUFSBY',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'comparison-demo',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes:
      'Replace with separately consented, clinically accurate patient before-and-after pair.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
  {
    id: 'comparison-ref-portrait-2',
    localPath: '/images/comparisons/comparison-ref-portrait-2.jpg',
    originalSourceUrl: 'https://stocksnap.io/photo/woman-skin-3AECYIAEDE',
    attributionRequirements: 'CC0 Public Domain Dedication (Authentic Stock via StockSnap)',
    licenseReference: 'CC0 1.0 Universal (StockSnap)',
    role: 'comparison-demo',
    isDemo: true,
    publicationStatus: 'draft',
    replacementNotes:
      'Replace with separately consented, clinically accurate patient before-and-after pair.',
    width: 960,
    height: 640,
    objectPosition: '50% 25%',
  },
];

/** Approved production hero image; remains undefined until owner approves a photo. */
export const approvedHeroImage: ApprovedImage | undefined = undefined;

/** Temporary editorial hero image used only when CONTENT_MODE=preview. */
export const previewHeroImage: ApprovedImage = {
  src: '/images/hero/home-clinic-hero.jpg',
  alt: 'Editorial luxury aesthetic medical suite in New York representing thoughtful, individualized aesthetic care',
  width: 1376,
  height: 768,
  objectPosition: 'center center',
};

export function getHeroImage(isPreviewMode: boolean): {
  image: ApprovedImage;
  isDemo: boolean;
} | null {
  if (approvedHeroImage) {
    return { image: approvedHeroImage, isDemo: false };
  }
  if (isPreviewMode) {
    return { image: previewHeroImage, isDemo: true };
  }
  return null;
}

/** Approved treatments banner image; undefined until owner supplies photography. */
export const approvedTreatmentsBannerImage: ApprovedImage | undefined = undefined;

export const previewTreatmentsBannerImage: ApprovedImage = {
  src: '/images/hero/treatments-clinic-hero.jpg',
  alt: 'Panoramic luxury New York aesthetic medical suite with textured warm ivory walls, tailored seating, and fluted architectural timber',
  width: 1376,
  height: 768,
  objectPosition: 'center center',
};

export function getTreatmentsBannerImage(isPreviewMode: boolean): {
  image: ApprovedImage;
  isDemo: boolean;
} | null {
  if (approvedTreatmentsBannerImage) {
    return { image: approvedTreatmentsBannerImage, isDemo: false };
  }
  if (isPreviewMode) {
    return { image: previewTreatmentsBannerImage, isDemo: true };
  }
  return null;
}
