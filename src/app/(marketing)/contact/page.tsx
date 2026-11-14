import type { Metadata } from 'next';
import { MapPin, Phone } from 'lucide-react';
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
      <section className="border-b border-champagne/25 bg-emerald-deep py-14 text-ivory sm:py-18">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-light">
                Contact &amp; Scheduling
              </p>
            </div>
            <h1 className="font-serif text-[clamp(2.15rem,4vw+0.85rem,3.4rem)] font-medium leading-[1.1] text-white">
              Request a consultation
            </h1>
            <p className="text-base leading-relaxed text-ivory/85 sm:text-lg">
              Share your preferred contact details below to request a
              consultation with {providerProfile.displayNameWithCredentials}.
              Requests are reviewed personally to coordinate scheduling.
            </p>
          </div>
        </div>
      </section>

      <section
        id="consultation-form"
        className="bg-canvas py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
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
              <div className="rounded-lg border border-border bg-surface-card p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-medium text-ink">
                  Practice information
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Provider
                    </dt>
                    <dd className="mt-1 font-medium text-ink">
                      {providerProfile.displayNameWithCredentials}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Telephone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.phoneHref}
                        className="inline-flex min-h-[36px] items-center gap-2 font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                      >
                        <Phone
                          className="h-4 w-4 text-brand"
                          aria-hidden="true"
                        />
                        <span>{siteConfig.phoneDisplay}</span>
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Location
                    </dt>
                    <dd className="mt-1 flex items-start gap-2 text-ink">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="font-medium">
                          {siteConfig.publicLocation}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">
                          Appointments are scheduled privately. Exact suite and
                          arrival instructions are provided once your
                          appointment is confirmed.
                        </span>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-rose-border bg-rose-soft p-6 text-sm leading-relaxed text-muted">
                <h3 className="font-serif text-xl font-medium text-ink">
                  What happens next
                </h3>
                <ol className="mt-3 list-inside list-decimal space-y-2">
                  <li>
                    Submit your preferred contact method and time window.
                  </li>
                  <li>
                    Your inquiry is reviewed to confirm availability—no slot is
                    held automatically online.
                  </li>
                  <li>
                    Clinical intake forms and medical history are completed
                    separately prior to treatment.
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
