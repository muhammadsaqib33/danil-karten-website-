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
      <section className="border-b border-border bg-canvas pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div
              className={`space-y-4 sm:space-y-5 ${
                portraitInfo ? 'lg:col-span-7' : 'lg:col-span-8'
              }`}
            >
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-champagne" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  About the Provider
                </p>
              </div>
              <h1 className="font-serif text-[clamp(2.15rem,4vw+0.85rem,3.4rem)] font-medium leading-[1.08] text-ink">
                {providerProfile.fullName}
              </h1>
              <p className="font-serif text-[clamp(1.25rem,2vw+0.55rem,1.7rem)] font-medium tracking-[0.04em] text-ink/90 whitespace-nowrap">
                {providerProfile.credentials}
              </p>
              <p className="text-sm font-medium tracking-[0.06em] text-brand">
                {providerProfile.roleLabel} · {siteConfig.publicLocation}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-ink/90 sm:text-lg">
                {providerProfile.shortIntro}
              </p>
            </div>

            {portraitInfo ? (
              <div className="lg:col-span-5">
                <figure className="overflow-hidden rounded-lg border border-border bg-surface-card shadow-sm">
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
                    className="aspect-[3/4] w-full object-cover"
                  />
                </figure>
              </div>
            ) : (
              <aside className="rounded-lg border border-border bg-rose-soft p-6 sm:p-8 lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Practice Details
                </p>
                <dl className="mt-4 space-y-3 text-sm">
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
                        className="font-medium text-ink underline decoration-border underline-offset-4 hover:text-brand"
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
            <h2 className="font-serif text-3xl font-medium text-ink">
              Biography
            </h2>
            {providerProfile.approvedBiography.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink/90 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Care Philosophy + 3 Core Principles */}
      <section className="bg-rose py-14 sm:py-18">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-brand" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Practice Philosophy
                </p>
              </div>
              <h2 className="font-serif text-[clamp(1.9rem,2.6vw+0.85rem,2.6rem)] font-medium leading-tight text-ink">
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

            <div className="divide-y divide-rose-border border-y border-rose-border lg:col-span-7">
              {homeContent.careApproach.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-5">
                    <span className="font-serif text-xl font-medium text-brand">
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
        heading="Schedule a consultation with Danielle"
        body="Request a consultation online or call the practice directly to discuss your aesthetic goals."
      />
    </>
  );
}
