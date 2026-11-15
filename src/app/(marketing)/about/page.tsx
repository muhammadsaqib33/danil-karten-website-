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
      {/* 1. Full-Bleed 2-Column Hero Header with Integrated Clinician Portrait */}
      <header className="phero">
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
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Clinician Credentials & Philosophy */}
            <div className="lg:col-span-7 xl:col-span-7">
              <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e0a9b6]">
                Clinical Leadership · New York
              </span>

              <h1>
                Danielle Karten.{' '}
                <span className="inline-block whitespace-nowrap">
                  <em>NP, AGPCNP-BC</em>
                </span>
              </h1>

              <p className="mt-3 mb-4 font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] font-light leading-snug text-[#f3ece6] italic">
                A measured approach to{' '}
                <span className="not-italic text-[#c9a15a]">
                  natural refinement.
                </span>
              </p>

              <p className="text-[clamp(0.95rem,1.2vw,1.04rem)] font-light leading-relaxed text-[#dfdad5]">
                {providerProfile.shortIntro}
              </p>

              <ul className="mt-6 mb-8 max-w-xl space-y-3 text-[14px] text-[#dfdad5]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a15a]" />
                  <div>
                    <strong className="font-medium text-white">
                      Board Certification:
                    </strong>{' '}
                    Board-certified Nurse Practitioner (AGPCNP-BC) holding extensive
                    clinical training and patient-centered assessment expertise.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a15a]" />
                  <div>
                    <strong className="font-medium text-white">
                      Anatomical Respect:
                    </strong>{' '}
                    Prioritizing natural facial movement, structural proportion,
                    and subtle enhancement rather than overt transformation.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a15a]" />
                  <div>
                    <strong className="font-medium text-white">
                      Patient Advocacy:
                    </strong>{' '}
                    Transparent discussion of indications, contraindications, and
                    realistic timelines before any procedure is scheduled.
                  </div>
                </li>
              </ul>

              <div className="phero-ctas">
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

            {/* Right Column: Clinician Portrait Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-portrait-card">
                <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={portraitSrc}
                    alt="Danielle Karten, NP, AGPCNP-BC"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    style={{
                      objectPosition:
                        portraitInfo?.image.objectPosition ?? '50% 20%',
                    }}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b191f]/85 via-transparent to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-left">
                    <div>
                      <div className="font-serif text-[17px] font-medium tracking-wide text-white">
                        Danielle Karten
                      </div>
                      <div className="text-[11px] font-medium tracking-wider text-[#c9a15a] uppercase">
                        NP, AGPCNP-BC · Private Suite Practice
                      </div>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] tracking-widest text-white/90 uppercase backdrop-blur-md">
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
      <section className="border-t border-[#eadfd8] bg-[#f3e9e2]/55 py-18 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-5">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
                Care Principles
              </span>
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
