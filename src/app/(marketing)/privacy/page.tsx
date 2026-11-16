import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.displayName} (${siteConfig.legalBusinessName}).`,
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-[#1b191f] pt-28 pb-12 text-white">
        <div className="site-container">
          <h1 className="font-serif text-[clamp(2.1rem,3.6vw+0.85rem,3rem)] font-light leading-[1.15] text-white">
            Privacy Policy
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
              1. Scope of This Policy
            </h2>
            <p className="text-muted">
              This privacy policy describes how {siteConfig.displayName} (
              {siteConfig.legalBusinessName}) handles inquiry information
              submitted through this public website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              2. Information Collected on This Website
            </h2>
            <p className="text-muted">
              The public consultation request form collects only basic contact
              and scheduling-preference details needed to respond to your
              inquiry: your full name, preferred contact method, phone number
              and/or email address, optional treatment interest, optional
              preferred contact window, and your separate communication/marketing
              preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              3. Information You Should Not Submit Online
            </h2>
            <p className="text-muted">
              Please do not submit date of birth, medical history, medication
              lists, allergies, clinical photographs, insurance identifiers, or
              sensitive health records through this public website. Any clinical
              intake required for care is handled separately through private
              practice workflows.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              4. Tracking &amp; Advertising
            </h2>
            <p className="text-muted">
              This website does not install third-party advertising pixels or
              send consultation interest or inquiry data to advertising networks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              5. Marketing Communications
            </h2>
            <p className="text-muted">
              Optional marketing updates are unchecked by default and are never
              required to request a consultation. If you opt in, you may
              withdraw permission at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              6. Contact for Privacy Questions
            </h2>
            <p className="text-muted">
              For questions about this privacy policy or to update your contact
              preferences, please call{' '}
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
