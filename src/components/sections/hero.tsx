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
    <section className="relative overflow-hidden bg-canvas py-8 sm:py-12 lg:py-14">
      {/* Subtle warm rose-soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] bg-rose-soft/40 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-champagne/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div
          className={
            heroImage
              ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-12'
              : 'mx-auto max-w-3xl py-6 text-center'
          }
        >
          {/* Editorial Text Column (5 cols on desktop) */}
          <div className={heroImage ? 'space-y-6 lg:col-span-5' : 'space-y-6'}>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-champagne/60 bg-white/70 px-3 py-1 backdrop-blur-sm sm:px-3.5">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <p className="truncate text-[10.5px] font-semibold uppercase tracking-[0.13em] text-brand sm:text-xs sm:tracking-[0.16em]">
                {homeContent.hero.eyebrow}
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.45rem,4.4vw+0.8rem,4.1rem)] font-normal leading-[1.08] tracking-tight text-emerald-deep">
              Thoughtful care.
              <span className="mt-1 block font-serif italic text-brand">
                A more confident you.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink/85 sm:text-[17px]">
              {homeContent.hero.supportingCopy}
            </p>

            <div
              className={`flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 ${
                heroImage ? '' : 'justify-center'
              }`}
            >
              <Link
                href={siteConfig.primaryCta.href}
                className={buttonClasses({
                  variant: 'primary',
                  size: 'lg',
                  className:
                    'shadow-[0_4px_16px_rgba(18,63,53,0.18)] hover:shadow-[0_6px_22px_rgba(18,63,53,0.26)]',
                })}
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.secondaryCta.href}
                className={buttonClasses({
                  variant: 'secondary',
                  size: 'lg',
                })}
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
                <dd className="mt-1 font-medium text-ink/80">Danielle Karten, NP</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.12em] text-brand">
                  Approach
                </dt>
                <dd className="mt-1 font-medium text-ink/80">Consultation-first</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-semibold uppercase tracking-[0.12em] text-brand">
                  Location
                </dt>
                <dd className="mt-1 font-medium text-ink/80">{siteConfig.publicLocation}</dd>
              </div>
            </dl>
          </div>

          {/* Asymmetrical Editorial Photography Column (7 cols on desktop) */}
          {heroImage ? (
            <div className="lg:col-span-7">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Decorative warm champagne underlay offset */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 hidden rounded-2xl border border-champagne/45 bg-rose-soft/30 -rotate-1 sm:block sm:-inset-3"
                />

                {/* Primary editorial image */}
                <figure className="relative overflow-hidden rounded-2xl border border-champagne/50 bg-white shadow-[0_22px_54px_-16px_rgba(18,63,53,0.22)]">
                  <Image
                    src={heroImage.image.src}
                    alt={heroImage.image.alt}
                    width={heroImage.image.width}
                    height={heroImage.image.height}
                    priority
                    sizes="(max-width: 1023px) 100vw, 56vw"
                    style={{
                      objectPosition: heroImage.image.objectPosition ?? '50% 25%',
                    }}
                    className="aspect-[4/3] sm:aspect-[16/11] w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-deep/20 via-transparent to-transparent"
                  />
                </figure>

                {/* Refined floating detail badge */}
                <div className="absolute -bottom-5 -left-3 hidden sm:flex items-center gap-3.5 rounded-xl border border-champagne/60 bg-white/95 p-3.5 shadow-[0_12px_30px_-6px_rgba(18,63,53,0.16)] backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-deep text-champagne">
                    <span className="font-serif text-base font-semibold tracking-wider">
                      DE
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                      Private Practice
                    </p>
                    <p className="font-serif text-xs italic text-ink/85">
                      Aesthetic Medicine · New York
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
