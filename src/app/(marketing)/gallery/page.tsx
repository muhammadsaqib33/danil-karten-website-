import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getComparisonsForView,
  getGalleryItemsForView,
} from '@/content/gallery';
import { siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { ResultsGallery } from '@/components/sections/results-gallery';
import { ImageGallery } from '@/components/sections/image-gallery';
import { ConsultationCta } from '@/components/sections/consultation-cta';
import { buttonClasses } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Explore before-and-after comparison layouts and practice atmosphere imagery at ${siteConfig.displayName} in ${siteConfig.publicLocation}.`,
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  const isPreview = isPreviewContentMode();
  const comparisons = getComparisonsForView(isPreview);
  const galleryItems = getGalleryItemsForView(isPreview);
  const hasAnyContent = comparisons.length > 0 || galleryItems.length > 0;

  return (
    <>
      <section className="border-b border-border/80 bg-canvas py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Visual Gallery
              </p>
            </div>
            <h1 className="font-serif text-[clamp(2.2rem,4vw+0.85rem,3.45rem)] font-light leading-[1.08] text-ink">
              Before &amp; After and Practice Experience
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-[17px]">
              Explore clinical treatment comparisons and the calm, private care
              atmosphere of {siteConfig.displayName}.
            </p>
          </div>
        </div>
      </section>

      {hasAnyContent ? (
        <>
          {comparisons.length > 0 ? (
            <ResultsGallery comparisons={comparisons} mode="full-page" />
          ) : null}

          {galleryItems.length > 0 ? (
            <ImageGallery items={galleryItems} mode="full-page" />
          ) : null}
        </>
      ) : (
        <section className="bg-canvas py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <div className="max-w-2xl space-y-4 rounded-2xl border border-border bg-surface-card p-8">
              <h2 className="font-serif text-3xl font-light text-ink">
                Authorized gallery photography forthcoming
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Patient photography and practice images are published only with
                explicit authorization. Please request a consultation to speak
                directly with Danielle Karten, NP, AGPCNP-BC.
              </p>
              <div className="pt-2">
                <Link
                  href={siteConfig.primaryCta.href}
                  className={buttonClasses({ variant: 'primary', size: 'md' })}
                >
                  {siteConfig.primaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <ConsultationCta />
    </>
  );
}
