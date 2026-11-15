import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Check, ArrowDown } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { providerProfile } from '@/content/provider';
import { getTreatmentsForView } from '@/content/treatments';
import { isPreviewContentMode } from '@/lib/content-mode';
import { resolveConsultationDeliveryMode } from '@/lib/server/crm-client';
import { ConsultationForm } from '@/components/forms/consultation-form';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Contact & Request a Consultation',
  description: `Request an aesthetic consultation with ${providerProfile.displayNameWithCredentials} at ${siteConfig.displayName} in ${siteConfig.publicLocation}, or call ${siteConfig.phoneDisplay}.`,
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const deliveryMode = resolveConsultationDeliveryMode();
  const isPreview = isPreviewContentMode();
  const visibleTreatments = getTreatmentsForView(isPreview);

  const treatmentOptions = [
    {
      value: 'general_consultation',
      label: 'General aesthetic consultation / Undecided',
    },
    ...visibleTreatments.map((treatment) => ({
      value: treatment.slug,
      label: treatment.cardTitle ?? treatment.displayName,
    })),
  ];

  return (
    <>
      {/* 1. Full-Bleed 2-Column Hero Header with Appointment Details Card (Fits 100vh Viewport) */}
      <header className="phero phero-contact">
        <picture>
          <Image
            src="/images/hero/contact-hero.jpg"
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
            {/* Left Column: Direct Consultation Message */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="mt-0 mb-3 text-[clamp(2.1rem,3.4vw,3.1rem)] leading-[1.1]">
                Request a consultation.{' '}
                <span className="inline-block whitespace-nowrap">
                  Begin your <em>care.</em>
                </span>
              </h1>

              <p className="mt-2 mb-4 max-w-xl text-[clamp(0.9rem,1.15vw,1rem)] font-light leading-relaxed text-[#dfdad5]">
                Share your preferred contact details below to request a private
                consultation with Danielle Karten, NP, AGPCNP-BC. Every inquiry is reviewed
                personally to coordinate unhurried, individualized care.
              </p>

              {/* Consultation Navigation Pills */}
              <div className="mb-5 flex flex-wrap gap-2 text-[11.5px]">
                <span className="rounded-full border border-[#c9a15a]/45 bg-[#c9a15a]/10 px-2.5 py-0.5 font-medium text-[#f0ebe6]">
                  In-Person Assessments
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 font-medium text-[#dfdad5]">
                  Private Suite Care
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 font-medium text-[#dfdad5]">
                  Direct NP Follow-Up
                </span>
              </div>

              <div className="phero-ctas">
                <a
                  href="#consultation-form"
                  className="cta-solid"
                >
                  Request Consultation
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="cta-ghost"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Column: Appointment Suite & Scheduling Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="phero-contact-card">
                {/* Header kicker */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#e0a9b6]">
                    Private Clinical Practice
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[9.5px] tracking-widest text-white/90 uppercase backdrop-blur-md">
                    New York, NY
                  </span>
                </div>

                <div className="mt-2.5 mb-2.5">
                  <div className="font-serif text-[16.5px] font-medium tracking-wide text-white">
                    Danielle Karten, NP, AGPCNP-BC
                  </div>
                  <div className="text-[10.5px] font-medium tracking-wider text-[#c9a15a] uppercase">
                    Board-Certified Nurse Practitioner · Suite Consultations
                  </div>
                </div>

                {/* 3 Core Consultation Principles */}
                <ul className="my-2.5 space-y-2 text-[12px] text-[#dfdad5]">
                  <li className="flex items-start gap-2 rounded-md bg-white/[0.03] p-2 border border-white/10">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c9a15a]" />
                    <div>
                      <strong className="text-white font-medium">Direct Clinician Evaluation:</strong>{' '}
                      All consultations are conducted directly by Danielle Karten, NP.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 rounded-md bg-white/[0.03] p-2 border border-white/10">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c9a15a]" />
                    <div>
                      <strong className="text-white font-medium">Unhurried Assessment:</strong>{' '}
                      Dedicated time for facial analysis, questions, and treatment planning.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 rounded-md bg-white/[0.03] p-2 border border-white/10">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c9a15a]" />
                    <div>
                      <strong className="text-white font-medium">Confidential Coordination:</strong>{' '}
                      Private appointment scheduling coordinated around your calendar.
                    </div>
                  </li>
                </ul>

                {/* Bottom Anchor Link */}
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11.5px] text-[#c9a15a] font-medium">
                  <a href="#consultation-form" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Fill Consultation Request Form Below</span>
                    <ArrowDown className="h-3 w-3" />
                  </a>
                  <span className="text-[10px] text-white/50 tracking-wider">BY APPOINTMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Consultation Form & Practice Information */}
      <section
        id="consultation-form"
        className="site-container py-14 sm:py-18"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ConsultationForm
              deliveryMode={deliveryMode}
              treatmentOptions={treatmentOptions}
            />
          </div>

          <aside
            aria-label="Practice contact details"
            className="space-y-6 lg:col-span-5"
          >
            <div className="rounded-xl border border-[#eadfd8] bg-white p-7 sm:p-9 shadow-xs">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-2">
                Practice Information
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#2e2c31]">
                {siteConfig.displayName}
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#8d8289]">
                    Lead Clinician
                  </dt>
                  <dd className="mt-1 font-medium text-[#2e2c31]">
                    {providerProfile.displayNameWithCredentials}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#8d8289]">
                    Direct Telephone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.phoneHref}
                      className="inline-flex min-h-[36px] items-center gap-2 font-medium text-[#2e2c31] underline decoration-[#c9a15a] underline-offset-4 transition-colors hover:text-[#b88d44]"
                    >
                      <Phone className="h-4 w-4 text-[#c9a15a]" aria-hidden="true" />
                      <span>{siteConfig.phoneDisplay}</span>
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#8d8289]">
                    Practice Location
                  </dt>
                  <dd className="mt-1 flex items-start gap-2 text-[#2e2c31]">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a15a]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-medium">
                        {siteConfig.publicLocation}
                      </span>
                      <span className="mt-1 block text-xs font-light leading-relaxed text-[#6a6266]">
                        Appointments are scheduled privately. Exact suite arrival
                        instructions are provided once your visit is confirmed.
                      </span>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-[#eadfd8] bg-[#f3e9e2]/55 p-7 sm:p-8 text-sm leading-relaxed text-[#6a6266]">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4788f] mb-1">
                Next Steps
              </span>
              <h3 className="font-serif text-xl font-medium text-[#2e2c31] mb-3">
                How scheduling works
              </h3>
              <ol className="list-inside list-decimal space-y-2.5 font-light text-[14px]">
                <li>
                  Submit your contact preference and scheduling window above.
                </li>
                <li>
                  Our practice reviews your inquiry personally to confirm opening availability.
                </li>
                <li>
                  Medical history and intake forms are completed securely prior to treatment.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
