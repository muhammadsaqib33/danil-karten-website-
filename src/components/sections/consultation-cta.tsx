import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { homeContent, siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

interface ConsultationCtaProps {
  heading?: string;
  body?: string;
}

export function ConsultationCta({
  heading = homeContent.contactCta.heading,
  body = homeContent.contactCta.body,
}: ConsultationCtaProps) {
  return (
    <section
      aria-labelledby="consultation-cta-heading"
      className="bg-canvas py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-champagne/35 bg-[#0F2821] p-8 text-ivory shadow-[0_20px_50px_-16px_rgba(15,40,33,0.4)] sm:p-12 lg:p-14">
          {/* Subtle ambient lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-champagne/15 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-champagne" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-light">
                  {homeContent.contactCta.eyebrow}
                </p>
              </div>
              <h2
                id="consultation-cta-heading"
                className="font-serif text-[clamp(2.1rem,3.4vw+0.85rem,3.2rem)] font-light leading-[1.08] text-white"
              >
                {heading}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-ivory/85 sm:text-[17px]">
                {body}
              </p>
            </div>

            <div className="space-y-4 lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
                <Link
                  href={siteConfig.primaryCta.href}
                  className={buttonClasses({ variant: 'champagne', size: 'lg' })}
                >
                  {siteConfig.primaryCta.label}
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className={buttonClasses({
                    variant: 'secondaryInverse',
                    size: 'lg',
                  })}
                >
                  <Phone
                    className="h-4 w-4 text-champagne-light"
                    aria-hidden="true"
                  />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
              <p className="flex items-center gap-2 text-xs sm:text-sm text-ivory/80">
                <MapPin
                  className="h-4 w-4 shrink-0 text-champagne-light"
                  aria-hidden="true"
                />
                <span>{siteConfig.publicLocation} · By appointment</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
