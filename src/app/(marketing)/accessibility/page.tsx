import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `Accessibility statement for ${siteConfig.displayName} (${siteConfig.legalBusinessName}).`,
  alternates: {
    canonical: '/accessibility',
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <div className="bg-[#1b191f] pt-28 pb-12 text-white">
        <div className="site-container">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-3">
            Inclusivity &amp; Standards
          </span>
          <h1 className="font-serif text-[clamp(2.1rem,3.6vw+0.85rem,3rem)] font-light leading-[1.15] text-white">
            Accessibility Statement
          </h1>
          <p className="mt-2 text-sm text-[#c8bcc2]">
            {siteConfig.legalBusinessName} · {siteConfig.publicLocation}
          </p>
        </div>
      </div>

      <section className="bg-canvas py-12 sm:py-16">
        <div className="site-container max-w-3xl space-y-8">
          <div className="space-y-6 text-sm leading-relaxed text-ink/90 sm:text-base">
          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Our Commitment
            </h2>
            <p className="text-muted">
              {siteConfig.displayName} aims to provide an accessible, clear, and
              usable digital experience for all visitors, targeting conformance
              with Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
              practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Measures Implemented
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted">
              <li>Semantic HTML landmarks and logical heading hierarchy.</li>
              <li>
                Keyboard-operable navigation, mobile drawer controls, and FAQ
                accordions with visible focus indicators.
              </li>
              <li>
                Skip-to-content navigation link and clear form label and error
                associations.
              </li>
              <li>
                High-contrast typography and reduced-motion preference support.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Need Assistance or Encountered a Barrier?
            </h2>
            <p className="text-muted">
              If you have difficulty accessing any content on this website or
              would prefer to request a consultation directly with assistance,
              please call{' '}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-ink underline decoration-border underline-offset-4 hover:text-brand"
              >
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}
