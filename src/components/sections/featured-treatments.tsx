import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Treatment } from '@/types/treatment';
import { siteConfig } from '@/content/site';
import { TreatmentCard } from '@/components/treatments/treatment-card';
import { buttonClasses } from '@/components/ui/button';

interface FeaturedTreatmentsProps {
  treatments: Treatment[];
  isPreviewMode?: boolean;
}

export function FeaturedTreatments({
  treatments,
  isPreviewMode = false,
}: FeaturedTreatmentsProps) {
  const featured = treatments.slice(0, 6);

  return (
    <section
      aria-labelledby="featured-treatments-heading"
      className="bg-surface-card py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div className="space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Treatments
            </p>
            <h2
              id="featured-treatments-heading"
              className="font-serif text-[clamp(1.9rem,2.8vw+0.85rem,2.75rem)] font-medium leading-tight text-ink"
            >
              Aesthetic consultations &amp; care
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Focused, nurse practitioner–led treatments selected and tailored
              around your individual anatomy and goals.
            </p>
          </div>
          <Link
            href="/treatments"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand"
          >
            <span>View Treatments</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {featured.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((treatment) => (
              <TreatmentCard
                key={treatment.slug}
                treatment={treatment}
                isPreviewMode={isPreviewMode}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-border bg-canvas p-6 sm:p-10">
            <div className="max-w-2xl space-y-4">
              <h3 className="font-serif text-2xl font-medium text-ink">
                Confirmed treatment menu forthcoming
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                The finalized public service menu is currently undergoing
                clinical and owner review. To discuss your goals directly with
                Danielle Karten, NP, AGPCNP-BC, please request a consultation or
                call{' '}
                <a
                  href={siteConfig.phoneHref}
                  className="font-medium text-ink underline decoration-border underline-offset-4 hover:text-brand"
                >
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
              <div className="pt-2">
                <Link
                  href={siteConfig.primaryCta.href}
                  className={buttonClasses({ variant: 'primary', size: 'md' })}
                >
                  {siteConfig.primaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
