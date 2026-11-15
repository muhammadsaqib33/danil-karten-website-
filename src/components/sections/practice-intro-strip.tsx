import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { providerProfile } from '@/content/provider';

export function PracticeIntroStrip() {
  return (
    <section
      aria-label="Practice standards"
      className="border-b border-[#eadfd8] bg-[#faf4ee] py-12 sm:py-16 text-center"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f] mb-6">
          Private Clinical Practice · New York
        </span>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#544c50] shadow-xs">
            <span className="font-serif normal-case italic text-[#b88d44] text-sm">
              {providerProfile.fullName}
            </span>
            <span>·</span>
            <span className="text-[11px]">{providerProfile.credentials}</span>
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#544c50] shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[#c9a15a]" aria-hidden="true" />
            <span>Private Suite Practice</span>
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#544c50] shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-[#c9a15a]" aria-hidden="true" />
            <span>{siteConfig.publicLocation}</span>
          </span>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#544c50] shadow-xs transition-colors hover:border-[#c9a15a] hover:text-[#b88d44]"
          >
            <Phone className="h-3.5 w-3.5 text-[#c9a15a]" aria-hidden="true" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
