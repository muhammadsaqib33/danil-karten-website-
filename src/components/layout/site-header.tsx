'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { DesktopNav } from '@/components/layout/desktop-nav';
import { MobileNavigation } from '@/components/layout/mobile-navigation';

export function SiteHeader() {
  const [, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent border-b border-transparent py-4 sm:py-5 text-white">
      <div className="site-container flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={(e) => (e.currentTarget as HTMLElement).blur()}
          className="group inline-flex min-h-[44px] flex-col justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a15a]"
        >
          <span className="font-serif text-lg font-semibold tracking-[0.32em] uppercase transition-colors sm:text-2xl text-white group-hover:text-[#e3c894]">
            {siteConfig.displayName}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] italic tracking-[0.16em] text-[#d4788f]">
            by Danielle Karten, NP
          </span>
        </Link>

        <DesktopNav />

        <MobileNavigation onOpenChange={setIsMenuOpen} />
      </div>
    </header>
  );
}
