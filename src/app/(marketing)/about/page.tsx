import type { Metadata } from 'next';
import Image from 'next/image';
import {
  getProviderDisplayPortrait,
  providerProfile,
} from '@/content/provider';
import { homeContent, siteConfig } from '@/content/site';
import { isPreviewContentMode } from '@/lib/content-mode';
import { ConsultationCta } from '@/components/sections/consultation-cta';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `About ${providerProfile.fullName}`,
  description: `Learn about ${providerProfile.displayNameWithCredentials} and individualized aesthetic care at ${siteConfig.displayName} in ${siteConfig.publicLocation}.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const isPreview = isPreviewContentMode();
  const portraitInfo = getProviderDisplayPortrait(isPreview);

  return (
    <>
      <section className="border-b border-border/80 bg-canvas py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div
              className={`space-y-5 ${
                portraitInfo ? 'lg:col-span-7' : 'lg:col-span-8'
              }`}
            >
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-champagne" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  About the Provider
                </p>
              </div>

              <div>
                <h1 className="font-serif text-[clamp(2.4rem,4.4vw+0.85rem,3.8rem)] font-light leading-[1.08] text-ink">
                  {providerProfile.fullName}
                </h1>
                <p className="mt-2 font-sans text-base sm:text-lg font-medium tracking-wide text-brand">
                  {providerProfile.credentials}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium tracking-wider uppercase text-muted">
                  {providerProfile.roleLabel} · {siteConfig.publicLocation}
                </p>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-ink/85 sm:text-[17px] sm:leading-relaxed">
                {providerProfile.shortIntro}
              </p>
            </div>

            {portraitInfo ? (
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-2.5 hidden rounded-3xl border border-champagne/30 sm:block"
                  />
                  <figure className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_42px_-14px_rgba(28,36,33,0.12)]">
                    <Image
                      src={portraitInfo.image.src}
                      alt={portraitInfo.image.alt}
                      width={portraitInfo.image.width}
                      height={portraitInfo.image.height}
                      priority
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
              <aside className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Practice Details
                </p>
                <dl className="mt-4 space-y-3.5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      Clinician
                    </dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {providerProfile.displayNameWithCredentials}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      Location
                    </dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {siteConfig.publicLocation}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      Telephone
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={siteConfig.phoneHref}
                        className="font-medium text-ink underline decoration-champagne underline-offset-4 hover:text-brand"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </aside>
            )}
          </div>
        </div>
      </section>

      {providerProfile.approvedBiography &&
      providerProfile.approvedBiography.length > 0 ? (
        <section className="bg-surface-card py-14 sm:py-18">
          <div className="mx-auto max-w-3xl space-y-5 px-5 sm:px-8">
            <h2 className="font-serif text-3xl font-light text-ink">
              Biography
            </h2>
            {providerProfile.approvedBiography.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink/85 sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Care Philosophy + 3 Core Principles */}
      <section className="border-b border-border/80 bg-surface/60 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-champagne" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Practice Philosophy
                </p>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3vw+0.85rem,2.8rem)] font-light leading-tight text-ink">
                {providerProfile.carePhilosophy.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-ink/85">
                {providerProfile.carePhilosophy.paragraphs.map(
                  (paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ),
                )}
              </div>
            </div>

            <div className="divide-y divide-border/80 border-y border-border/80 lg:col-span-7">
              {homeContent.careApproach.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-5">
                    <span className="font-serif text-2xl font-light text-champagne">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium leading-snug text-ink">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-7 sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCta
        heading="Book a consultation with Danielle"
        body="Schedule your consultation online or call the practice directly to discuss your aesthetic goals."
      />
    </>
  );
}
