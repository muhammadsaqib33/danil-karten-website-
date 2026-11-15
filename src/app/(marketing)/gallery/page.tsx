import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowDown } from 'lucide-react';
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
      {/* 1. Full-Bleed 2-Column Hero Header with Visual Results & Atmosphere Preview (Fits 100vh Viewport) */}
      <header className="phero phero-gallery">
        <picture>
          <Image
            src="/images/gallery/gallery-suite.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="phero-img"
            style={{ objectPosition: 'center center' }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />

        <div className="phero-inner">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Visual Results Philosophy & Categories */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="mt-0 mb-3 text-[clamp(2.1rem,3.4vw,3.1rem)] leading-[1.1]">
                Clinical precision.{' '}
                <span className="inline-block whitespace-nowrap">
                  <em>Authentic results.</em>
                </span>
              </h1>

              <p className="mt-2 mb-4 max-w-xl text-[clamp(0.9rem,1.15vw,1rem)] font-light leading-relaxed text-[#dfdad5]">
                Explore representative aesthetic treatment comparisons and the calm,
                private appointment atmosphere of {siteConfig.displayName} in New York.
                Carefully planned interventions designed to soften expression lines,
                balance facial contour, and respect natural anatomy.
              </p>

              {/* Category Navigation Pills */}
              <div className="mb-5 flex flex-wrap gap-2 text-[11.5px]">
                <span className="rounded-full border border-[#c9a15a]/45 bg-[#c9a15a]/10 px-2.5 py-0.5 font-medium text-[#f0ebe6]">
                  Injectables &amp; Neuromodulators
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 font-medium text-[#dfdad5]">
                  Skin &amp; Regenerative
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 font-medium text-[#dfdad5]">
                  Scalp &amp; Hair
                </span>
              </div>

              <div className="phero-ctas">
                <a
                  href="#results"
                  className="cta-solid"
                >
                  Explore Comparisons
                </a>
                <Link
                  href={siteConfig.primaryCta.href}
                  className="cta-ghost"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Results & Atmosphere Showcase Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-gallery-card">
                {/* Header kicker */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#e0a9b6]">
                    Documented Care
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9.5px] tracking-widest text-white/90 uppercase backdrop-blur-md">
                    New York, NY
                  </span>
                </div>

                <div className="mt-3 mb-3">
                  <div className="font-serif text-[17px] font-medium tracking-wide text-white">
                    Standardized Documentation
                  </div>
                  <div className="text-[11px] font-medium tracking-wider text-[#c9a15a] uppercase">
                    Calibrated Lighting · Unfiltered Anatomy
                  </div>
                </div>

                {/* Dual Visual Showcase Tiles */}
                <div className="grid grid-cols-2 gap-2.5 my-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 shadow-inner">
                    <Image
                      src="/images/comparisons/comparison-ref-portrait-1.jpg"
                      alt="Facial aesthetic reference profile"
                      fill
                      sizes="220px"
                      className="object-cover object-[50%_25%]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-[9px] font-medium tracking-wider text-white uppercase bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
                      Results Preview
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 shadow-inner">
                    <Image
                      src="/images/gallery/gallery-consultation.jpg"
                      alt="Private consultation atmosphere"
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-[9px] font-medium tracking-wider text-white uppercase bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
                      Suite Atmosphere
                    </span>
                  </div>
                </div>

                {/* 3 Documentation Commitments */}
                <ul className="space-y-2 text-[12.5px] text-[#dfdad5] pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                    <span><strong className="text-white font-medium">Standardized Lighting:</strong> Consistent clinical conditions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                    <span><strong className="text-white font-medium">Conservative Dosing:</strong> Expressive natural movement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                    <span><strong className="text-white font-medium">Longitudinal Care:</strong> Attentive follow-up reviews</span>
                  </li>
                </ul>

                {/* Bottom Anchor Link */}
                <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11.5px] text-[#c9a15a] font-medium">
                  <a href="#results" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Explore Interactive Comparisons</span>
                    <ArrowDown className="h-3 w-3" />
                  </a>
                  <span className="text-[10px] text-white/50 tracking-wider">6 PROFILES</span>
                </div>
              </div>
            </div>
          </div>
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
