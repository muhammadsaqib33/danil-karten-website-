import { MapPin, ShieldCheck, Phone } from 'lucide-react';
import { homeContent, siteConfig } from '@/content/site';

export function PracticeIntroStrip() {
  return (
    <section
      aria-label="Practice overview"
      className="border-b border-border/80 bg-surface/75 text-ink backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-serif text-xl font-medium text-ink sm:text-2xl">
              {homeContent.introStrip.providerName}
            </span>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-champagne sm:inline-block"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand sm:text-[13px]">
              {homeContent.introStrip.credentials}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              <span>{homeContent.introStrip.location}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              <span>{homeContent.introStrip.settingLabel}</span>
            </span>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 font-medium text-ink underline decoration-champagne underline-offset-4 transition-colors hover:text-brand"
            >
              <Phone
                className="h-4 w-4 shrink-0 text-brand"
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
