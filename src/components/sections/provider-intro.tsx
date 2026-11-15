import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getProviderDisplayPortrait, providerProfile } from '@/content/provider';
import { siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

interface ProviderIntroProps {
  isPreviewMode: boolean;
}

export function ProviderIntro({ isPreviewMode }: ProviderIntroProps) {
  const portraitInfo = getProviderDisplayPortrait(isPreviewMode);

  return (
    <section
      aria-labelledby="provider-intro-heading"
      className="border-y border-border/80 bg-surface/70 py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {portraitInfo ? (
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative subtle champagne hairline offset */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2.5 hidden rounded-3xl border border-champagne/30 sm:block"
                />

                <figure className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-14px_rgba(28,36,33,0.1)]">
                  <Image
                    src={portraitInfo.image.src}
                    alt={portraitInfo.image.alt}
                    width={portraitInfo.image.width}
                    height={portraitInfo.image.height}
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    style={{
                      objectPosition:
                        portraitInfo.image.objectPosition ?? '50% 20%',
                    }}
                    className="editorial-image-zoom aspect-[3/4] w-full object-cover"
                  />
                  {portraitInfo.isPlaceholder ? (
                    <div className="absolute top-3 right-3 rounded-full border border-champagne/40 bg-black/60 px-3 py-1 text-[10px] font-medium tracking-wider text-champagne-light backdrop-blur-md">
                      Placeholder Portrait · Danielle Karten
                    </div>
                  ) : null}
                </figure>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-surface-card p-8 sm:p-10 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Lead Clinician
                </p>
                <p className="mt-3 font-serif text-3xl font-medium text-ink">
                  {providerProfile.fullName}
                </p>
                <p className="mt-1 text-sm font-medium text-muted">
                  {providerProfile.credentials}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
                  {providerProfile.roleLabel} · {siteConfig.publicLocation}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Clinical Leadership
              </p>
            </div>

            <h2
              id="provider-intro-heading"
              className="font-serif text-[clamp(2.1rem,3.4vw+0.85rem,3.2rem)] font-light leading-[1.08] text-ink"
            >
              Danielle Karten
              <span className="mt-1 block font-sans text-base sm:text-lg font-normal tracking-wide text-brand">
                {providerProfile.credentials}
              </span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-ink/85 sm:text-[17px]">
              {providerProfile.shortIntro}
            </p>

            <div className="rounded-xl border border-border bg-canvas/90 p-5 sm:p-6 shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Clinical Philosophy
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                {providerProfile.carePhilosophy.paragraphs[0]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/about"
                className={buttonClasses({ variant: 'primary', size: 'md' })}
              >
                <span>About Danielle</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.primaryCta.href}
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-ink underline decoration-champagne underline-offset-4 transition-colors hover:text-brand"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
