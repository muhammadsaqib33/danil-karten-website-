import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, ArrowDown } from 'lucide-react';
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

              <p className="mt-2 mb-6 max-w-xl text-[clamp(0.9rem,1.15vw,1rem)] font-light leading-relaxed text-[#dfdad5]">
                Share your preferred contact details below to request a private
                consultation with Danielle Karten, NP, AGPCNP-BC. Every inquiry is reviewed
                personally to coordinate unhurried, individualized care.
              </p>

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
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-serif text-sm italic tracking-wide text-[#e3c894]">
                    Practice Suite
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-white/60">
                    New York, NY
                  </span>
                </div>

                <div className="mt-3.5 mb-3">
                  <div className="font-serif text-[18px] font-medium tracking-wide text-white">
                    Danielle Karten, NP
                  </div>
                  <div className="text-xs font-light text-[#dfdad5]">
                    Adult-Gerontology Primary Care Nurse Practitioner (AGPCNP-BC)
                  </div>
                </div>

                {/* Practical Details */}
                <div className="my-3 divide-y divide-white/10 border-y border-white/10 text-[13px] text-white/90">
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-[#dfdad5]">Location</span>
                    <span className="font-medium text-white">Manhattan, New York</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-[#dfdad5]">Appointments</span>
                    <span className="font-medium text-white">Private suite reservation</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-[#dfdad5]">Direct Telephone</span>
                    <a href={siteConfig.phoneHref} className="font-medium text-[#c9a15a] hover:text-white transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Bottom Anchor Link */}
                <div className="mt-3 pt-2 flex items-center justify-between text-xs text-[#c9a15a] font-medium">
                  <a href="#consultation-form" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Fill Consultation Request Form Below</span>
                    <ArrowDown className="h-3 w-3" />
                  </a>
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
