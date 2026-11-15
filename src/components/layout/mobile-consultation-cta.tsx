'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/content/site';

export function MobileConsultationCta() {
  const pathname = usePathname();

  if (pathname === '/contact') {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Quick consultation actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#eadfd8] bg-[#faf4ee]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden shadow-[0_-4px_24px_rgba(38,36,42,0.08)]"
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.displayName} at ${siteConfig.phoneDisplay}`}
          className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#eadfd8] bg-white px-4 text-xs font-semibold uppercase tracking-wider text-[#2e2c31] transition-all duration-200 hover:border-[#c9a15a] active:scale-95"
        >
          <Phone className="h-4 w-4 text-[#c9a15a]" aria-hidden="true" />
          <span>Call</span>
        </a>
        <Link
          href={siteConfig.primaryCta.href}
          className="flex min-h-[46px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#c9a15a] to-[#dcb877] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b191f] shadow-sm transition-all duration-200 hover:from-[#d8b26c] hover:to-[#e6c88e] active:scale-95"
        >
          {siteConfig.primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
