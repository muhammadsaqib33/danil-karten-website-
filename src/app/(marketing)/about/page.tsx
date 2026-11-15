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
      {/* 1. Nurse Yara Signature .phero Hero Header */}
      <header className="phero">
        <picture>
          <Image
            src="/images/hero/hero-editorial.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="phero-img"
            style={{ objectPosition: '50% 25%' }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />
        <div className="glow1" aria-hidden="true" />
        <div className="glow2" aria-hidden="true" />

        <div className="phero-inner">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <span>About Danielle Karten</span>
          </div>

          <span className="kicker">
            Clinical Leadership · New York
          </span>

          <h1>
            Danielle Karten.{' '}
            <span className="inline-block whitespace-nowrap">
              <em>NP, AGPCNP-BC</em>
            </span>
          </h1>

          <p>
            Board-certified Adult-Gerontology Primary Care Nurse Practitioner
            dedicated to conservative, evidence-based aesthetic medicine, subtle
            facial harmony, and personalized patient care in New York.
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
              Explore Treatments
            </Link>
          </div>

          <p className="loc-note">
            Practicing in {siteConfig.publicLocation} · Consultations by Appointment
          </p>
        </div>
      </header>

      {/* 2. Provider Profile & Split Section */}
      <section className="py-18 sm:py-24 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
              About the Clinician
            </span>

            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] font-light leading-[1.1] text-[#2e2c31]">
              A measured approach to <em>natural refinement.</em>
            </h2>

            <p className="lead text-[16px]">
              {providerProfile.shortIntro}
            </p>

            <ul className="gold-dash-list mt-6 max-w-xl">
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Board Certification:
                </strong>{' '}
                Board-certified Nurse Practitioner (AGPCNP-BC) holding extensive clinical
                training and patient-centered assessment expertise.
              </li>
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Anatomical Respect:
                </strong>{' '}
                Prioritizing natural facial movement, structural proportion, and subtle
                enhancement rather than overt transformation.
              </li>
              <li>
                <strong className="font-medium text-[#2e2c31]">
                  Patient Advocacy:
                </strong>{' '}
                Transparent discussion of indications, contraindications, and realistic
                timelines before any procedure is scheduled.
              </li>
            </ul>

            <div className="pt-4">
              <Link href={siteConfig.primaryCta.href} className="cta-solid">
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <figure className="relative overflow-hidden rounded-xl border border-[#eadfd8] bg-white split-img-shadow">
                <Image
                  src={portraitSrc}
                  alt="Danielle Karten, NP, AGPCNP-BC"
                  width={portraitInfo?.image.width ?? 896}
                  height={portraitInfo?.image.height ?? 1200}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  style={{
                    objectPosition:
                      portraitInfo?.image.objectPosition ?? '50% 20%',
                  }}
                  className="editorial-image-zoom aspect-[3/4] w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Care Philosophy + 3 Core Principles */}
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
