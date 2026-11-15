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
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center overflow-hidden bg-[#0C211B] text-ivory pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Editorial ambient radial glows & vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-champagne/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-100px] h-[500px] w-[500px] rounded-full bg-brand/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_30%,_rgba(10,24,19,0.85)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div
          className={
            heroImage
              ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-14'
              : 'mx-auto max-w-3xl text-center'
          }
        >
          {/* Editorial Text Column (7 cols on desktop) */}
          <div className={heroImage ? 'space-y-6 lg:col-span-7' : 'space-y-6'}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-champagne/35 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-light animate-pulse"
                aria-hidden="true"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne-light sm:text-xs">
                {homeContent.hero.eyebrow}
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,4.8vw+0.8rem,4.5rem)] font-light leading-[1.06] tracking-tight text-white">
              Thoughtful care.
              <span className="mt-1 block font-serif italic text-champagne-light">
                A more confident you.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ivory/85 sm:text-[17px] sm:leading-relaxed">
              {homeContent.hero.supportingCopy}
            </p>

            <div
              className={`flex flex-col gap-3.5 pt-2 sm:flex-row sm:items-center sm:gap-4 ${
                heroImage ? '' : 'justify-center'
              }`}
            >
              <Link
                href={siteConfig.primaryCta.href}
                className={buttonClasses({
                  variant: 'champagne',
                  size: 'lg',
                })}
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.secondaryCta.href}
                className={buttonClasses({
                  variant: 'secondaryInverse',
                  size: 'lg',
                })}
              >
                <span>{siteConfig.secondaryCta.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Editorial Quick Facts / Hallmarks */}
            <dl className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-xs sm:max-w-xl sm:grid-cols-3">
              <div>
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-champagne-light">
                  Clinician
                </dt>
                <dd className="mt-1 font-medium text-white/90">Danielle Karten, NP</dd>
              </div>
              <div>
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-champagne-light">
                  Practice
                </dt>
                <dd className="mt-1 font-medium text-white/90">Consultation-first</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-champagne-light">
                  Location
                </dt>
                <dd className="mt-1 font-medium text-white/90">{siteConfig.publicLocation}</dd>
              </div>
            </dl>
          </div>

          {/* Asymmetrical Editorial Photography Column (5 cols on desktop) */}
          {heroImage ? (
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                {/* Decorative champagne hairline frame offset */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 hidden rounded-3xl border border-champagne/25 sm:block"
                />

                {/* Primary editorial image container */}
                <figure className="group relative overflow-hidden rounded-2xl border border-champagne/35 bg-[#122A22] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.55)]">
                  <Image
                    src={heroImage.image.src}
                    alt={heroImage.image.alt}
                    width={heroImage.image.width}
                    height={heroImage.image.height}
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    style={{
                      objectPosition: heroImage.image.objectPosition ?? '50% 25%',
                    }}
                    className="editorial-image-zoom aspect-[4/5] sm:aspect-[3/4] w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C211B]/60 via-transparent to-transparent"
                  />
                  {heroImage.isDemo ? (
                    <div className="absolute top-3 right-3 rounded-full border border-champagne/40 bg-black/55 px-3 py-1 text-[10px] font-medium tracking-wider text-champagne-light backdrop-blur-md">
                      Sample Photography · Not Danielle Karten
                    </div>
                  ) : null}
                </figure>

                {/* Editorial floating hallmark badge */}
                <div className="absolute -bottom-5 -left-3 hidden sm:flex items-center gap-3.5 rounded-2xl border border-champagne/40 bg-[#0F2821]/95 p-3.5 shadow-[0_14px_34px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-champagne text-emerald-deep">
                    <span className="font-serif text-base font-semibold tracking-wider">
                      DE
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne-light">
                      Private Suite
                    </p>
                    <p className="font-serif text-xs italic text-white/90">
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
