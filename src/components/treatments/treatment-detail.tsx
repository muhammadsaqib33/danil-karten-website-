import Link from 'next/link';
import Image from 'next/image';
import type { Treatment } from '@/types/treatment';
import { getTreatmentDisplayImage } from '@/content/treatments';
import { Accordion } from '@/components/ui/accordion';
import { ConsultationCta } from '@/components/sections/consultation-cta';
import { siteConfig } from '@/content/site';

interface TreatmentDetailProps {
  treatment: Treatment;
  isPreviewMode?: boolean;
}

export function TreatmentDetail({
  treatment,
  isPreviewMode = false,
}: TreatmentDetailProps) {
  const displayImage = getTreatmentDisplayImage(treatment, isPreviewMode);
  const imageSrc =
    displayImage?.image.src || '/images/hero/hero-editorial.jpg';

  return (
    <>
      {/* 1. Nurse Yara Signature .phero Hero Header */}
      <header className="phero">
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
              objectPosition: displayImage?.image.objectPosition ?? 'center center',
            }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />

        <div className="phero-inner">
          <h1>
            {treatment.displayName}. <em>Natural balance.</em>
          </h1>

          <p>{treatment.shortDescription}</p>

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
              All Treatments
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Overview & Split Image Section */}
      <section className="py-18 sm:py-24 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
              Clinical Overview
            </span>

            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] font-light leading-[1.1] text-[#2e2c31]">
              Tailored precisely to <em>your anatomy.</em>
            </h2>

            <p className="lead text-[16px]">
              {treatment.fullIntroduction}
            </p>

            {treatment.relatedOptions && treatment.relatedOptions.length > 0 ? (
              <p className="text-sm font-light text-[#6a6266] border-t border-[#eadfd8] pt-4">
                Formulations discussed in consultation:{' '}
                <span className="font-medium text-[#2e2c31]">
                  {treatment.relatedOptions.join(' · ')}
                </span>
              </p>
            ) : null}
          </div>

          {displayImage ? (
            <div className="lg:col-span-5">
              <figure className="relative overflow-hidden rounded-xl border border-[#eadfd8] bg-white split-img-shadow">
                <Image
                  src={displayImage.image.src}
                  alt={displayImage.image.alt}
                  width={displayImage.image.width}
                  height={displayImage.image.height}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  style={{
                    objectPosition:
                      displayImage.image.objectPosition ?? '50% 35%',
                  }}
                  className="editorial-image-zoom aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          ) : null}
        </div>
      </section>

      {/* 3 & 4. Goals & Suitability Split */}
      <section className="border-y border-[#eadfd8] bg-[#f3e9e2]/45 py-18 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[#eadfd8] bg-white p-7 sm:p-9 shadow-xs">
            <span className="block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#d4788f] mb-2">
              Consultation Focus
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#2e2c31] mb-5">
              Goals discussed together
            </h3>
            <ul className="gold-dash-list">
              {treatment.potentialGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#eadfd8] bg-white p-7 sm:p-9 shadow-xs">
            <span className="block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#d4788f] mb-2">
              Clinical Assessment
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#2e2c31] mb-5">
              Suitability &amp; safety evaluation
            </h3>
            <ul className="gold-dash-list">
              {treatment.consultationInvolves.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {treatment.suitabilityConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 & 6. What to Expect & Recovery */}
      <section className="py-18 sm:py-24 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-2">
              Step by Step
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2e2c31] mb-6">
              What to expect during your visit
            </h2>
            <ul className="gold-dash-list">
              {treatment.whatToExpect.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-2">
              Aftercare &amp; Longevity
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2e2c31] mb-6">
              Recovery and aftercare guidance
            </h2>
            <ul className="gold-dash-list">
              {treatment.generalRecovery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      {treatment.faqs.length > 0 ? (
        <section className="border-t border-[#eadfd8] py-18 sm:py-24 max-w-[860px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-2">
              Questions &amp; Answers
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2e2c31]">
              Frequently asked questions
            </h2>
          </div>
          <Accordion
            idPrefix={`treatment-${treatment.slug}`}
            items={treatment.faqs.map((faq, index) => ({
              id: `${index}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </section>
      ) : null}

      {/* 8. Consultation CTA */}
      <ConsultationCta
        heading={`Discuss ${treatment.displayName.toLowerCase()} in consultation`}
        body="Request a consultation to speak with Danielle Karten, NP, AGPCNP-BC about your goals and whether this option is appropriate for you."
      />
    </>
  );
}
