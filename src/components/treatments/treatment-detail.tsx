import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Treatment } from '@/types/treatment';
import { getTreatmentDisplayImage } from '@/content/treatments';
import { Accordion } from '@/components/ui/accordion';
import { ConsultationCta } from '@/components/sections/consultation-cta';

interface TreatmentDetailProps {
  treatment: Treatment;
  isPreviewMode?: boolean;
}

export function TreatmentDetail({
  treatment,
  isPreviewMode = false,
}: TreatmentDetailProps) {
  const backHref = '/treatments';
  const displayImage = getTreatmentDisplayImage(treatment, isPreviewMode);
  const headingTitle = treatment.cardTitle
    ? `${treatment.displayName} (${treatment.cardTitle})`
    : treatment.displayName;

  return (
    <>
      {/* 1. Introduction */}
      <section className="border-b border-border bg-canvas py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Link
            href={backHref}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>All treatments</span>
          </Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div
              className={`space-y-5 ${
                displayImage ? 'lg:col-span-6' : 'max-w-3xl lg:col-span-12'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {treatment.category}
                </p>
              </div>

              <h1 className="font-serif text-[clamp(2.15rem,4vw+0.85rem,3.35rem)] font-medium leading-[1.1] text-ink">
                {headingTitle}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {treatment.shortDescription}
              </p>

              {treatment.relatedOptions &&
              treatment.relatedOptions.length > 0 ? (
                <p className="text-sm text-muted">
                  Related options discussed in consultation:{' '}
                  <span className="font-medium text-ink">
                    {treatment.relatedOptions.join(', ')}
                  </span>
                </p>
              ) : null}
            </div>

            {displayImage ? (
              <div className="lg:col-span-6">
                <figure className="overflow-hidden rounded-lg border border-border bg-surface-card shadow-sm">
                  <Image
                    src={displayImage.image.src}
                    alt={displayImage.image.alt}
                    width={displayImage.image.width}
                    height={displayImage.image.height}
                    priority
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    style={{
                      objectPosition:
                        displayImage.image.objectPosition ?? '50% 35%',
                    }}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* 2. Treatment Overview */}
      <section className="bg-surface-card py-12 sm:py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium text-ink">
              Treatment overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/90 sm:text-lg">
              {treatment.fullIntroduction}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. Goals Discussed & Suitability Assessment */}
      <section className="bg-rose-soft py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 md:grid-cols-2">
          <div className="rounded-lg border border-rose-border bg-surface-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Goals discussed during consultation
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {treatment.potentialGoals.map((goal) => (
                <li key={goal} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-rose-border bg-surface-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Suitability assessment
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {treatment.consultationInvolves.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{item}</span>
                </li>
              ))}
              {treatment.suitabilityConsiderations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 & 6. What to Expect & Recovery / Aftercare Overview */}
      <section className="bg-surface-card py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              What to expect
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {treatment.whatToExpect.map((step) => (
                <li key={step} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              Recovery &amp; aftercare overview
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {treatment.generalRecovery.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Risks and Limitations */}
      <section className="bg-canvas py-12 sm:py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="rounded-lg border border-border bg-surface-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              Risks and limitations
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {treatment.risksAndLimitations.map((risk) => (
                <li key={risk} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted">
              Individual outcomes vary. Treatment decisions, suitability, and
              expected limitations are evaluated in person with Danielle Karten,
              NP, AGPCNP-BC.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      {treatment.faqs.length > 0 ? (
        <section className="bg-surface-card py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="mb-6 font-serif text-2xl font-medium text-ink sm:text-3xl">
              Frequently asked questions
            </h2>
            <Accordion
              idPrefix={`treatment-${treatment.slug}`}
              items={treatment.faqs.map((faq, index) => ({
                id: `${index}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>
      ) : null}

      {/* 9. Consultation CTA */}
      <ConsultationCta
        heading={`Discuss ${treatment.displayName.toLowerCase()} in consultation`}
        body="Request a consultation to speak with Danielle Karten, NP, AGPCNP-BC about your goals and whether this option is appropriate for you."
      />
    </>
  );
}
