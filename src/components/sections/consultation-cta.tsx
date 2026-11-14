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
      className="bg-surface/65 py-12 text-ivory sm:py-16"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-8 rounded-xl border border-champagne/30 bg-emerald-deep p-8 shadow-[0_18px_45px_-20px_rgba(18,63,53,0.45)] sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-light">
                {homeContent.contactCta.eyebrow}
              </p>
            </div>
            <h2
              id="consultation-cta-heading"
              className="font-serif text-[clamp(2rem,3vw+0.85rem,3.1rem)] font-medium leading-[1.12] text-white"
            >
              {heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ivory/85">
              {body}
            </p>
          </div>

          <div className="space-y-4 lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={siteConfig.primaryCta.href}
                className={buttonClasses({ variant: 'inverse', size: 'lg' })}
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
            <p className="flex items-center gap-2 text-sm text-ivory/80">
              <MapPin
                className="h-4 w-4 shrink-0 text-champagne-light"
                aria-hidden="true"
              />
              <span>{siteConfig.publicLocation} · By appointment</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
