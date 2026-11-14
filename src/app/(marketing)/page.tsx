import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { PracticeIntroStrip } from '@/components/sections/practice-intro-strip';
import { FeaturedTreatments } from '@/components/sections/featured-treatments';
import { ProviderIntro } from '@/components/sections/provider-intro';
import { ResultsGallery } from '@/components/sections/results-gallery';
import { CareApproach } from '@/components/sections/care-approach';
import { ImageGallery } from '@/components/sections/image-gallery';
import { VisitSteps } from '@/components/sections/visit-steps';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';
import { ConsultationCta } from '@/components/sections/consultation-cta';
import { getFeaturedTreatmentsForView } from '@/content/treatments';
import {
  getComparisonsForView,
  getGalleryItemsForView,
} from '@/content/gallery';
import { siteConfig } from '@/content/site';
import { getSiteUrl } from '@/lib/site-url';
import { isPreviewContentMode } from '@/lib/content-mode';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: siteConfig.metadata.defaultTitle,
  description: siteConfig.metadata.description,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const isPreview = isPreviewContentMode();
  const featuredTreatments = getFeaturedTreatmentsForView(isPreview);
  const comparisons = getComparisonsForView(isPreview);
  const galleryItems = getGalleryItemsForView(isPreview);
  const siteUrl = getSiteUrl().toString().replace(/\/$/, '');

  const verifiedClinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteConfig.displayName,
    legalName: siteConfig.legalBusinessName,
    url: siteUrl,
    telephone: '+1-917-855-7737',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(verifiedClinicSchema),
        }}
      />
      <Hero isPreviewMode={isPreview} />
      <PracticeIntroStrip />
      <FeaturedTreatments
        treatments={featuredTreatments}
        isPreviewMode={isPreview}
      />
      <ProviderIntro isPreviewMode={isPreview} />
      <ResultsGallery comparisons={comparisons} mode="preview-section" />
      <CareApproach />
      <ImageGallery items={galleryItems} mode="editorial-home" />
      <VisitSteps />
      <TestimonialsSection />
      <FaqSection />
      <ConsultationCta />
    </>
  );
}
