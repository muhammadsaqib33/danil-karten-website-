import type { PublicationStatus } from '@/types/treatment';

export interface ImageSourceInfo {
  originalSourceUrl: string;
  attributionRequirements: string;
  licenseReference: string;
}

export interface ImageManifestEntry {
  id: string;
  localPath: string;
  originalSourceUrl: string;
  attributionRequirements: string;
  licenseReference: string;
  role:
    | 'hero'
    | 'provider-placeholder'
    | 'treatment'
    | 'comparison-demo'
    | 'gallery';
  isDemo: boolean;
  publicationStatus: PublicationStatus;
  replacementNotes: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface GalleryImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface GalleryItem {
  id: string;
  category:
    | 'Practice & Atmosphere'
    | 'Consultation'
    | 'Editorial & Skin'
    | 'Treatment Detail';
  title: string;
  image: GalleryImageAsset;
  caption: string;
  isDemo: boolean;
  isIllustrativeEnvironment?: boolean;
  publicationStatus: PublicationStatus;
  aspectVariant?: 'landscape' | 'portrait' | 'wide';
  sourceInfo: ImageSourceInfo;
}

export interface BeforeAfterComparison {
  id: string;
  treatmentSlug: string;
  treatmentLabel: string;
  category: 'Injectables' | 'Skin & Regenerative' | 'Scalp & Hair';
  title: string;
  summary: string;
  beforeImage: GalleryImageAsset;
  afterImage: GalleryImageAsset;
  caption: string;
  demoNotice: string;
  isLayoutDemo: boolean;
  isAlignedForSlider: boolean;
  isDemo: boolean;
  publicationStatus: PublicationStatus;
  sourceInfo: ImageSourceInfo;
}

