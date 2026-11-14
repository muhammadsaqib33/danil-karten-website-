import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { DesktopNav } from '@/components/layout/desktop-nav';
import { MobileNavigation } from '@/components/layout/mobile-navigation';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-t-2 border-t-emerald-deep border-b border-b-champagne/40 bg-white/95 shadow-[0_6px_24px_-8px_rgba(18,63,53,0.12)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 sm:h-[76px] sm:px-8">
        <Link
          href="/"
          className="group inline-flex min-h-[44px] items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {siteConfig.logo ? (
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              priority
              className="h-9 w-auto object-contain"
            />
          ) : (
            <span className="flex flex-col border-l-2 border-champagne pl-3">
              <span className="font-serif text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-brand sm:text-[26px] sm:leading-none">
                {siteConfig.displayName}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {siteConfig.publicLocation}
              </span>
            </span>
          )}
        </Link>

        <DesktopNav />

        <MobileNavigation />
      </div>
    </header>
  );
}
