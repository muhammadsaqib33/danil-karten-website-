'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';
import { DesktopNav } from '@/components/layout/desktop-nav';
import { MobileNavigation } from '@/components/layout/mobile-navigation';

function getScrollPosition(): number {
  if (typeof window === 'undefined') return 0;
  return Math.max(
    0,
    window.scrollY ||
      window.pageYOffset ||
      document.documentElement?.scrollTop ||
      document.body?.scrollTop ||
      0
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adjust state during render when pathname changes (official React pattern)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsVisible(true);
  }

  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const tickingRef = useRef(false);
  const suppressScrollUntilRef = useRef(0);

  // 1. Reset and synchronize tracking refs whenever the route / pathname changes
  useEffect(() => {
    accumulatedDeltaRef.current = 0;
    tickingRef.current = false;
    suppressScrollUntilRef.current = Date.now() + 350;

    const syncPosition = () => {
      const currentY = getScrollPosition();
      lastScrollYRef.current = currentY;
      accumulatedDeltaRef.current = 0;
      setIsScrolled(currentY > 16);
    };

    // Immediate sync
    syncPosition();

    // Re-sync after Next.js completes DOM update and browser scroll restoration
    const r1 = requestAnimationFrame(syncPosition);
    const r2 = requestAnimationFrame(() => requestAnimationFrame(syncPosition));
    const t = setTimeout(syncPosition, 120);

    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
      clearTimeout(t);
    };
  }, [pathname]);

  // 2. Listen to browser Back/Forward (popstate), anchor jumps (hashchange), and anchor clicks
  useEffect(() => {
    const handleNavEvent = () => {
      setIsVisible(true);
      accumulatedDeltaRef.current = 0;
      tickingRef.current = false;
      suppressScrollUntilRef.current = Date.now() + 500;
      const currentY = getScrollPosition();
      lastScrollYRef.current = currentY;
      setIsScrolled(currentY > 16);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      const href = anchor?.getAttribute('href');
      if (href && href.includes('#')) {
        setIsVisible(true);
        suppressScrollUntilRef.current = Date.now() + 600;
      }
    };

    window.addEventListener('popstate', handleNavEvent);
    window.addEventListener('hashchange', handleNavEvent);
    document.addEventListener('click', handleAnchorClick, { passive: true });

    return () => {
      window.removeEventListener('popstate', handleNavEvent);
      window.removeEventListener('hashchange', handleNavEvent);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // 3. Scroll tracking with direction detection and delta thresholds
  useEffect(() => {
    lastScrollYRef.current = getScrollPosition();

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const rawScrollY = getScrollPosition();
        const docHeight = Math.max(
          document.documentElement?.scrollHeight || 0,
          document.body?.scrollHeight || 0
        );
        const maxScroll = Math.max(0, docHeight - window.innerHeight);

        // Clamp to prevent rubber-banding/negative bounce
        const currentScrollY = maxScroll > 0 ? Math.min(rawScrollY, maxScroll) : rawScrollY;
        const prevScrollY = lastScrollYRef.current;
        const diff = currentScrollY - prevScrollY;

        setIsScrolled(currentScrollY > 16);

        // If an anchor jump or route transition just occurred, keep visible and sync position
        if (Date.now() < suppressScrollUntilRef.current) {
          setIsVisible(true);
          accumulatedDeltaRef.current = 0;
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
          return;
        }

        // Always show near the very top of the page
        if (currentScrollY <= 48) {
          setIsVisible(true);
          accumulatedDeltaRef.current = 0;
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
          return;
        }

        if (diff > 0) {
          // Scrolling Down
          if (accumulatedDeltaRef.current < 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current = Math.min(
            60,
            accumulatedDeltaRef.current + diff
          );

          // Hide once past 60px and accumulated at least 8px down, or on a single swipe of >= 12px
          if (currentScrollY > 60 && (accumulatedDeltaRef.current >= 8 || diff >= 12)) {
            setIsVisible(false);
          }
        } else if (diff < 0) {
          // Scrolling Up
          if (accumulatedDeltaRef.current > 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current = Math.max(
            -60,
            accumulatedDeltaRef.current + diff
          );

          // Promptly show on small upward scroll (6px) or swipe of <= -10px
          if (accumulatedDeltaRef.current <= -6 || diff <= -10) {
            setIsVisible(true);
          }
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const showHeader = isVisible || isMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-in-out focus-within:translate-y-0 motion-reduce:transition-none ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'border-b border-b-champagne/40 bg-white/95 shadow-[0_6px_24px_-8px_rgba(18,63,53,0.12)] backdrop-blur-md'
            : 'border-b border-b-champagne/30 bg-white/90 backdrop-blur-sm'
        } border-t-2 border-t-emerald-deep`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:gap-6 sm:px-8">
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
              <span className="flex flex-col border-l-2 border-champagne pl-2.5 sm:pl-3">
                <span className="font-serif text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-brand sm:text-[26px] sm:leading-none">
                  {siteConfig.displayName}
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:mt-1 sm:text-xs sm:tracking-[0.18em]">
                  {siteConfig.publicLocation}
                </span>
              </span>
            )}
          </Link>

          <DesktopNav />

          <MobileNavigation onOpenChange={setIsMenuOpen} />
        </div>
      </header>

      {/* Layout offset spacer ensures zero shift when header is fixed */}
      <div aria-hidden="true" className="h-16 shrink-0 sm:h-[76px]" />
    </>
  );
}
