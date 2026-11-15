import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTreatmentsForView } from '@/content/treatments';
import { getTreatmentsBannerImage } from '@/content/images';
import { siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { TreatmentGrid } from '@/components/treatments/treatment-grid';
import { ConsultationCta } from '@/components/sections/consultation-cta';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Treatments Menu',
  description: `Explore aesthetic consultations and treatments at ${siteConfig.displayName} in ${siteConfig.publicLocation}.`,
  alternates: {
    canonical: '/treatments',
  },
};

interface TreatmentsPageProps {
  searchParams: Promise<{ preview?: string }>;
}

export default async function TreatmentsPage({
  searchParams,
}: TreatmentsPageProps) {
  const resolvedSearchParams = await searchParams;
  const isPreview = isPreviewContentMode(resolvedSearchParams.preview);
  const treatments = getTreatmentsForView(isPreview);
  const bannerImage = getTreatmentsBannerImage(isPreview);
  const imageSrc =
    bannerImage?.image.src || '/images/hero/treatments-clinic-hero.jpg';

  return (
    <>
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
              objectPosition: bannerImage?.image.objectPosition ?? 'center center',
            }}
          />
        </picture>

        <div className="phero-grade" aria-hidden="true" />

        <div className="phero-inner">
          <h1>
            Consultation-first. Natural <em>refinement.</em>
          </h1>

          <p>
            Every treatment begins with an unhurried clinical assessment with
            Danielle Karten, NP, AGPCNP-BC to evaluate facial anatomy, discuss
            realistic expectations, and recommend appropriate options tailored to you.
          </p>

          <div className="phero-ctas">
            <Link
              href={siteConfig.primaryCta.href}
              className="cta-solid"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="cta-ghost"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <section className="py-14 sm:py-20 max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4788f]">
            Clinical Services
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal text-[#1b191f] sm:text-4xl">
            Aesthetic Care Menu
          </h2>
          <p className="mt-3 text-sm font-light text-[#544c50] leading-relaxed">
            All appointments are conducted personally by Danielle Karten, NP, AGPCNP-BC following a comprehensive assessment.
          </p>
        </div>

        {treatments.length > 0 ? (
          <TreatmentGrid treatments={treatments} isPreviewMode={isPreview} />
        ) : (
          <div className="rounded-xl border border-[#eadfd8] bg-white p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-light text-[#2e2c31]">
              Consultations available by appointment
            </h2>
            <p className="mt-3 text-[15px] font-light text-[#6a6266]">
              To discuss individualized treatment options directly with Danielle
              Karten, NP, AGPCNP-BC, please request a consultation online or call{' '}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-[#c9a15a] underline underline-offset-4"
              >
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
            <div className="mt-6">
              <Link
                href={siteConfig.primaryCta.href}
                className="cta-solid"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </div>
        )}
      </section>

      <ConsultationCta />
    </>
  );
}
