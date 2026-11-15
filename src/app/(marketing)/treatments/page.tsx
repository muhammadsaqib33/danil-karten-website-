import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowDown } from 'lucide-react';
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
              <span className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e0a9b6]">
                Aesthetic Services Menu · New York
              </span>

              <h1 className="mt-0 mb-3 text-[clamp(2.1rem,3.6vw,3.2rem)] leading-[1.1]">
                Consultation-first.{' '}
                <span className="inline-block whitespace-nowrap">
                  <em>Natural refinement.</em>
                </span>
              </h1>

              <p className="mt-2 mb-5 max-w-xl text-[clamp(0.92rem,1.15vw,1.02rem)] font-light leading-relaxed text-[#dfdad5]">
                Every treatment begins with an unhurried clinical assessment with
                Danielle Karten, NP, AGPCNP-BC to evaluate facial anatomy, discuss
                realistic expectations, and recommend appropriate options tailored to you.
              </p>

              {/* Category Navigation Pills */}
              <div className="mb-6 flex flex-wrap gap-2 text-[12px]">
                <span className="rounded-full border border-[#c9a15a]/45 bg-[#c9a15a]/10 px-3 py-1 font-medium text-[#f0ebe6]">
                  Neuromodulators &amp; Injectables
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-medium text-[#dfdad5]">
                  Collagen &amp; Biostimulators
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-medium text-[#dfdad5]">
                  Regenerative PRP &amp; Peels
                </span>
              </div>

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

            {/* Right Column: Treatment Pathways & Protocols Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-treatments-card">
                {/* Header kicker */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#e0a9b6]">
                    Clinical Care Pathways
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[9.5px] tracking-widest text-white/90 uppercase backdrop-blur-md">
                    New York Suite
                  </span>
                </div>

                <div className="mt-3 mb-3.5">
                  <div className="font-serif text-[17px] font-medium tracking-wide text-white">
                    Aesthetic Care Pathways
                  </div>
                  <div className="text-[11px] font-medium tracking-wider text-[#c9a15a] uppercase">
                    Individualized Assessment · Conservative Dosing
                  </div>
                </div>

                {/* 3 Core Treatment Pathway Items */}
                <div className="space-y-3 my-3">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:border-[#c9a15a]/40">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                      <span className="text-[13px] font-medium text-white">
                        Neuromodulators &amp; Expression Lines
                      </span>
                    </div>
                    <p className="mt-1 pl-5.5 text-[12px] font-light text-[#dfdad5] leading-relaxed">
                      Tailored dosing planned to soften lines while preserving natural facial movement.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:border-[#c9a15a]/40">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                      <span className="text-[13px] font-medium text-white">
                        Collagen &amp; Dermal Architecture
                      </span>
                    </div>
                    <p className="mt-1 pl-5.5 text-[12px] font-light text-[#dfdad5] leading-relaxed">
                      Biostimulators, microneedling, and medical peels supporting skin firmness &amp; texture.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:border-[#c9a15a]/40">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#c9a15a] shrink-0" />
                      <span className="text-[13px] font-medium text-white">
                        Regenerative Autologous Therapy
                      </span>
                    </div>
                    <p className="mt-1 pl-5.5 text-[12px] font-light text-[#dfdad5] leading-relaxed">
                      Staged platelet-rich plasma (PRP) consultations for complexion &amp; scalp vitality.
                    </p>
                  </div>
                </div>

                {/* Bottom Anchor Link */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11.5px] text-[#c9a15a] font-medium">
                  <a href="#services-menu" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Explore All 8 Treatments Below</span>
                    <ArrowDown className="h-3 w-3" />
                  </a>
                  <span className="text-[10px] text-white/50 tracking-wider">8 SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Aesthetic Services Grid */}
      <section id="services-menu" className="py-14 sm:py-20 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4788f]">
            Clinical Services
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal text-[#1b191f] sm:text-4xl">
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
