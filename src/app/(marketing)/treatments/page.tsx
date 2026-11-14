import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { getTreatmentsForView } from '@/content/treatments';
import { getTreatmentsBannerImage } from '@/content/images';
import { siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { TreatmentGrid } from '@/components/treatments/treatment-grid';
import { ConsultationCta } from '@/components/sections/consultation-cta';
import { buttonClasses } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Treatments',
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

  return (
    <>
      <section className="border-b border-border bg-canvas py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div
              className={`space-y-5 ${bannerImage ? 'lg:col-span-6' : 'max-w-3xl lg:col-span-12'
                }`}
            >
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-champagne" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Treatments Menu
                </p>
              </div>
              <h1 className="font-serif text-[clamp(2.2rem,4vw+0.85rem,3.45rem)] font-medium leading-[1.1] text-ink">
                Consultation-first aesthetic care
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Every treatment begins with an unhurried clinical assessment with
                Danielle Karten, NP, AGPCNP-BC to review your goals, suitability,
                and individualized options.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href={siteConfig.primaryCta.href}
                  className={buttonClasses({ variant: 'primary', size: 'md' })}
                >
                  {siteConfig.primaryCta.label}
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className={buttonClasses({ variant: 'secondary', size: 'md' })}
                >
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {bannerImage ? (
              <div className="lg:col-span-6">
                <figure className="overflow-hidden rounded-lg border border-border bg-surface-card shadow-sm">
                  <Image
                    src={bannerImage.image.src}
                    alt={bannerImage.image.alt}
                    width={bannerImage.image.width}
                    height={bannerImage.image.height}
                    priority
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    style={{
                      objectPosition:
                        bannerImage.image.objectPosition ?? '50% 50%',
                    }}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-surface/65 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          {treatments.length > 0 ? (
            <TreatmentGrid treatments={treatments} isPreviewMode={isPreview} />
          ) : (
            <div className="rounded-lg border border-border bg-surface-card p-8 sm:p-12">
              <div className="max-w-2xl space-y-4">
                <h2 className="font-serif text-3xl font-medium text-ink">
                  Consultations available by appointment
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  To discuss individualized treatment options directly with
                  Danielle Karten, NP, AGPCNP-BC, please request a consultation
                  online or call{' '}
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
                    className={buttonClasses({ variant: 'primary', size: 'lg' })}
                  >
                    {siteConfig.primaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
