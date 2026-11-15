import type { Metadata } from 'next';
import Image from 'next/image';
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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Visual Gallery',
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
      {/* 1. Nurse Yara Signature .phero Hero Header */}
      <header className="phero">
        <picture>
          <Image
            src="/images/gallery/gallery-suite.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="phero-img"
            style={{ objectPosition: '50% 50%' }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />
        <div className="glow1" aria-hidden="true" />
        <div className="glow2" aria-hidden="true" />

        <div className="phero-inner">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <span>Visual Gallery</span>
          </div>

          <span className="kicker">
            Visual Gallery · Clinical Care
          </span>

          <h1>
            Clinical precision. Authentic <em>results.</em>
          </h1>

          <p>
            Explore representative aesthetic treatment comparisons and the calm,
            private appointment atmosphere of {siteConfig.displayName} in New York.
          </p>

          <div className="phero-ctas">
            <Link
              href={siteConfig.primaryCta.href}
              className="cta-solid"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href="/treatments"
              className="cta-ghost"
            >
              View Treatment Menu
            </Link>
          </div>

          <p className="loc-note">
            Appointments scheduled in New York, NY · Private Consultation Suite
          </p>
        </div>
      </header>

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
        <section className="py-20 max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
          <div className="max-w-xl mx-auto rounded-xl border border-[#eadfd8] bg-white p-8 sm:p-12">
            <h2 className="font-serif text-3xl font-light text-[#2e2c31]">
              Gallery photography forthcoming
            </h2>
            <p className="mt-3 text-[15px] font-light text-[#6a6266]">
              Please request a consultation to speak directly with Danielle
              Karten, NP, AGPCNP-BC regarding individualized treatment possibilities.
            </p>
            <div className="mt-6">
              <Link href={siteConfig.primaryCta.href} className="cta-solid">
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </div>
        </section>
      )}

      <ConsultationCta />
    </>
  );
}
