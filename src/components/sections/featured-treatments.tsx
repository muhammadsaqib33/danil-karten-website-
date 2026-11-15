import Link from 'next/link';
import type { Treatment } from '@/types/treatment';
import { TreatmentCard } from '@/components/treatments/treatment-card';

interface FeaturedTreatmentsProps {
  treatments: Treatment[];
  isPreviewMode?: boolean;
}

export function FeaturedTreatments({
  treatments,
  isPreviewMode = false,
}: FeaturedTreatmentsProps) {
  const featured = treatments.slice(0, 3);

  return (
    <section
      aria-labelledby="featured-treatments-heading"
      className="py-16 sm:py-24 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-8"
    >
      <div className="flex flex-col justify-between gap-6 border-b border-[#eadfd8] pb-8 sm:flex-row sm:items-end">
        <div className="space-y-3">
          <span className="kicker-pink">
            Injectable Treatments
          </span>
          <h2
            id="featured-treatments-heading"
            className="font-serif text-[clamp(2.1rem,4.2vw,3.2rem)] font-light leading-[1.1] text-[#2e2c31]"
          >
            Designed around <em>your face.</em>
          </h2>
          <p className="lead max-w-2xl">
            Aesthetic treatments should never look uniform. Every treatment begins with
            an unhurried anatomical evaluation with Danielle Karten, NP to personalize
            placement and maintain your unique facial expression.
          </p>
        </div>

        <Link
          href="/treatments"
          className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a15a] underline decoration-[#c9a15a]/40 underline-offset-4 transition-colors hover:text-[#b88d44] hover:decoration-[#c9a15a]"
        >
          <span>View Treatment Menu</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((treatment) => (
          <TreatmentCard
            key={treatment.slug}
            treatment={treatment}
            isPreviewMode={isPreviewMode}
          />
        ))}
      </div>
    </section>
  );
}
