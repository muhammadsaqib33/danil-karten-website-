import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { getTreatmentsForView } from '@/content/treatments';
import { getTreatmentsBannerImage } from '@/content/images';
import { siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { TreatmentGrid } from '@/components/treatments/treatment-grid';
import { ConsultationCta } from '@/components/sections/consultation-cta';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Treatments Menu',
  description: `Explore aesthetic consultations and treatments at ${siteConfig.displayName} in ${siteConfig.publicLocation}.`,
  alternates: {
    canonical: '/treatments',
  },
};

interface TreatmentsPageProps {
  searchParams: Promise<{ preview?: string }>;
}

export default async function TreatmentsPage({
  searchParams,
}: TreatmentsPageProps) {
  const resolvedSearchParams = await searchParams;
  const isPreview = isPreviewContentMode(resolvedSearchParams.preview);
  const treatments = getTreatmentsForView(isPreview);
  const bannerImage = getTreatmentsBannerImage(isPreview);
  const imageSrc =
    bannerImage?.image.src || '/images/hero/treatments-clinic-hero.jpg';

  return (
    <>
      {/* 1. Full-Bleed 2-Column Hero Header with Treatment Pathways Card (Fits 100vh Viewport) */}
      <header className="phero phero-treatments">
        <picture>
          <Image
            src={imageSrc}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="phero-img"
            style={{
              objectPosition: bannerImage?.image.objectPosition ?? 'center center',
            }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />

        <div className="phero-inner">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Clinical Philosophy & Treatment Categories */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="mt-0 mb-3 text-[clamp(2rem,3.4vw,3.1rem)] leading-[1.1]">
                Consultation-first.{' '}
                <span className="inline-block whitespace-nowrap">
                  <em>Natural refinement.</em>
                </span>
              </h1>

              <p className="mt-2 mb-6 max-w-xl text-[clamp(0.9rem,1.15vw,1rem)] font-light leading-relaxed text-[#dfdad5]">
                Every treatment begins with an unhurried clinical assessment with
                Danielle Karten, NP, AGPCNP-BC to evaluate facial anatomy, discuss
                realistic expectations, and recommend appropriate options tailored to you.
              </p>

              <div className="phero-ctas">
                <a
                  href="#services-menu"
                  className="cta-solid"
                >
                  View Treatment Menu
                </a>
                <Link
                  href={siteConfig.primaryCta.href}
                  className="cta-ghost"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Right Column: Treatment Offerings Overview */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-treatments-card">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-serif text-sm italic tracking-wide text-[#e3c894]">
                    Treatment Menu
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-white/60">
                    By Appointment
                  </span>
                </div>

                <div className="mt-3.5 mb-3">
                  <div className="font-serif text-[18px] font-medium tracking-wide text-white">
                    Curated Aesthetic Medicine
                  </div>
                  <p className="mt-1 text-xs font-light text-[#dfdad5] leading-relaxed">
                    Administered personally by Danielle Karten, NP following individualized facial evaluation.
                  </p>
                </div>

                {/* 3 Core Treatment Groups */}
                <div className="my-3 divide-y divide-white/10 border-y border-white/10 text-[13px] text-white/90">
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-white">Neuromodulators</span>
                    <span className="text-xs text-[#c9a15a]">Expression softening</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-white">Collagen &amp; Biostimulators</span>
                    <span className="text-xs text-[#c9a15a]">Firmness &amp; contour</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-white">Regenerative PRP &amp; Peels</span>
                    <span className="text-xs text-[#c9a15a]">Texture &amp; tone</span>
                  </div>
                </div>

                {/* Bottom Anchor Link */}
                <div className="mt-3 pt-2 flex items-center justify-between text-xs text-[#c9a15a] font-medium">
                  <a href="#services-menu" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>View All Treatment Details Below</span>
                    <ArrowDown className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Aesthetic Services Grid */}
      <section id="services-menu" className="site-container py-14 sm:py-18">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-normal text-[#1b191f] sm:text-4xl">
            Aesthetic Care Menu
          </h2>
          <p className="mt-3 text-sm font-light text-[#544c50] leading-relaxed">
            All appointments are conducted personally by Danielle Karten, NP, AGPCNP-BC following a comprehensive assessment.
          </p>
        </div>

        {treatments.length > 0 ? (
          <TreatmentGrid treatments={treatments} isPreviewMode={isPreview} />
        ) : (
          <div className="rounded-xl border border-[#eadfd8] bg-white p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-light text-[#2e2c31]">
              Consultations available by appointment
            </h2>
            <p className="mt-3 text-[15px] font-light text-[#6a6266]">
              To discuss individualized treatment options directly with Danielle
              Karten, NP, AGPCNP-BC, please request a consultation online or call{' '}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-[#c9a15a] underline underline-offset-4"
              >
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
            <div className="mt-6">
              <Link
                href={siteConfig.primaryCta.href}
                className="cta-solid"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </div>
        )}
      </section>

      <ConsultationCta />
    </>
  );
}
