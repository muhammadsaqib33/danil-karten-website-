import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { homeContent, siteConfig } from '@/content/site';
import { getHeroImage } from '@/content/images';
import { buttonClasses } from '@/components/ui/button';

interface HeroProps {
  isPreviewMode: boolean;
}

export function Hero({ isPreviewMode }: HeroProps) {
  const heroImage = getHeroImage(isPreviewMode);

  return (
    <section className="relative overflow-hidden bg-canvas py-9 sm:py-13 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] bg-rose-soft/45 lg:block"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div
          className={
            heroImage
              ? 'grid items-center gap-8 lg:grid-cols-12 lg:gap-12'
              : 'mx-auto max-w-3xl py-6 text-center'
          }
        >
          {/* ~45% Text Column (5 of 12 cols on desktop) */}
          <div className={heroImage ? 'space-y-6 lg:col-span-5' : 'space-y-6'}>
            <div className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-champagne"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {homeContent.hero.eyebrow}
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,4.3vw+0.9rem,3.95rem)] font-medium leading-[1.06] tracking-tight text-ink">
              {homeContent.hero.heading}
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {homeContent.hero.supportingCopy}
            </p>

            <div
              className={`flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4 ${
                heroImage ? '' : 'justify-center'
              }`}
            >
              <Link
                href={siteConfig.primaryCta.href}
                className={buttonClasses({ variant: 'primary', size: 'lg' })}
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.secondaryCta.href}
                className={buttonClasses({ variant: 'secondary', size: 'lg' })}
              >
                <span>{siteConfig.secondaryCta.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="grid grid-cols-2 gap-4 border-t border-border/80 pt-5 text-xs sm:max-w-md sm:grid-cols-3">
              <div>
                <dt className="font-semibold uppercase tracking-[0.12em] text-brand">
                  Clinician
                </dt>
                <dd className="mt-1 text-muted">NP, AGPCNP-BC</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.12em] text-brand">
                  Approach
                </dt>
                <dd className="mt-1 text-muted">Consultation-first</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-semibold uppercase tracking-[0.12em] text-brand">
                  Location
                </dt>
                <dd className="mt-1 text-muted">{siteConfig.publicLocation}</dd>
              </div>
            </dl>
          </div>

          {/* ~55% Photography Column (7 of 12 cols on desktop) */}
          {heroImage ? (
            <div className="lg:col-span-7">
              <figure className="relative overflow-hidden rounded-xl border border-champagne/35 bg-rose-soft shadow-[0_22px_54px_-18px_rgba(18,63,53,0.2)]">
                <Image
                  src={heroImage.image.src}
                  alt={heroImage.image.alt}
                  width={heroImage.image.width}
                  height={heroImage.image.height}
                  priority
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  style={{
                    objectPosition: heroImage.image.objectPosition ?? '50% 25%',
                  }}
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
