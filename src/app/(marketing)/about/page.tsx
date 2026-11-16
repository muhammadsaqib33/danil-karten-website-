import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  getProviderDisplayPortrait,
  providerProfile,
} from '@/content/provider';
import { homeContent, siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { ConsultationCta } from '@/components/sections/consultation-cta';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `About ${providerProfile.fullName}`,
  description: `Learn about ${providerProfile.displayNameWithCredentials} and individualized aesthetic care at ${siteConfig.displayName} in ${siteConfig.publicLocation}.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const isPreview = isPreviewContentMode();
  const portraitInfo = getProviderDisplayPortrait(isPreview);
  const portraitSrc =
    portraitInfo?.image.src || '/images/provider/placeholder-portrait.jpg';

  return (
    <>
      {/* 1. Full-Bleed 2-Column Hero Header with Integrated Clinician Portrait (Fits 100vh Viewport) */}
      <header className="phero phero-about">
        <picture>
          <Image
            src="/images/hero/about-clinic-hero.jpg"
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
            {/* Left Column: Clinician Credentials & Philosophy */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="mt-0 mb-3 text-[clamp(2.1rem,3.6vw,3.2rem)] leading-[1.1]">
                Danielle Karten.{' '}
                <span className="inline-block whitespace-nowrap">
                  <em>NP, AGPCNP-BC</em>
                </span>
              </h1>

              <p className="mt-2 mb-4 max-w-xl text-[clamp(0.92rem,1.15vw,1.02rem)] font-light leading-relaxed text-[#dfdad5]">
                {providerProfile.shortIntro}
              </p>

              <p className="mb-6 max-w-xl text-[clamp(0.92rem,1.15vw,1.02rem)] font-light leading-relaxed text-[#dfdad5]">
                With specialized training in adult-gerontology primary care and a dedicated focus on facial anatomy, Danielle combines clinical rigor with an artist&apos;s appreciation for subtle balance. Every recommendation is shaped through an unhurried consultation, transparent conversation, and a commitment to preserving your natural facial expression.
              </p>

              <div className="phero-ctas mt-2">
                <Link
                  href={siteConfig.primaryCta.href}
                  className="cta-solid"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/treatments"
                  className="cta-ghost"
                >
                  Explore Treatments
                </Link>
              </div>
            </div>

            {/* Right Column: Clinician Portrait Card (Optimized Proportion) */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-portrait-card">
                <figure className="relative aspect-[4/4.8] w-full overflow-hidden rounded-xl">
                  <Image
                    src={portraitSrc}
                    alt="Danielle Karten, NP, AGPCNP-BC"
                    fill
                    priority
                    sizes="(max-width: 1023px) 360px, 425px"
                    style={{
                      objectPosition:
                        portraitInfo?.image.objectPosition ?? '50% 18%',
                    }}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b191f]/85 via-transparent to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-left">
                    <div>
                      <div className="font-serif text-[16.5px] font-medium tracking-wide text-white">
                        Danielle Karten
                      </div>
                      <div className="text-[11px] font-medium tracking-wider text-[#c9a15a] uppercase">
                        NP, AGPCNP-BC · Private Suite
                      </div>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9.5px] tracking-widest text-white/90 uppercase backdrop-blur-md">
                      New York
                    </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Care Philosophy + 3 Core Principles */}
      <section className="border-t border-[#eadfd8] bg-[#f3e9e2]/55 py-14 sm:py-18 lg:py-20">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-5">
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-tight text-[#2e2c31]">
                {providerProfile.carePhilosophy.heading}
              </h2>
              <div className="space-y-4 text-[15.5px] font-light leading-relaxed text-[#6a6266]">
                {providerProfile.carePhilosophy.paragraphs.map(
                  (paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ),
                )}
              </div>
            </div>

            <div className="divide-y divide-[#eadfd8] border-y border-[#eadfd8] lg:col-span-7">
              {homeContent.careApproach.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-5">
                    <span className="font-serif text-2xl font-light text-[#c9a15a]">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium leading-snug text-[#2e2c31]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] font-light leading-relaxed text-[#6a6266] sm:col-span-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCta
        heading="Book a consultation with Danielle"
        body="Schedule your consultation online or call the practice directly to discuss your aesthetic goals."
      />
    </>
  );
}
