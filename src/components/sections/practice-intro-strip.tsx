import { MapPin, ShieldCheck, Phone } from 'lucide-react';
import { homeContent, siteConfig } from '@/content/site';

export function PracticeIntroStrip() {
  return (
    <section
      aria-label="Practice overview"
      className="border-y border-champagne/25 bg-emerald-deep text-ivory"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-serif text-xl font-medium text-white sm:text-2xl">
              {homeContent.introStrip.providerName}
            </span>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-champagne/50 sm:inline-block"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne-light sm:text-sm">
              {homeContent.introStrip.credentials}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ivory/90">
            <span className="inline-flex items-center gap-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-champagne-light"
                aria-hidden="true"
              />
              <span>{homeContent.introStrip.location}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-champagne-light"
                aria-hidden="true"
              />
              <span>{homeContent.introStrip.settingLabel}</span>
            </span>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 font-medium text-white underline decoration-champagne/45 underline-offset-4 transition-colors hover:text-champagne-light"
            >
              <Phone
                className="h-4 w-4 shrink-0 text-champagne-light"
                aria-hidden="true"
              />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

