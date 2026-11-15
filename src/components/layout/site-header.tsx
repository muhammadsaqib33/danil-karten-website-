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
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);

  // Synchronize on pathname change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsVisible(true);
  }

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const tickingRef = useRef(false);
  const suppressScrollUntilRef = useRef(0);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  // 1. Reset and synchronize tracking refs whenever the route changes
  useEffect(() => {
    accumulatedDeltaRef.current = 0;
    tickingRef.current = false;
    suppressScrollUntilRef.current = Date.now() + 150;

    // Clear focus from header nav items upon page change
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      if (headerRef.current?.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }

    const syncPosition = () => {
      const currentY = getScrollPosition();
      lastScrollYRef.current = currentY;
      accumulatedDeltaRef.current = 0;
      setIsScrolled(currentY > 40);
    };

    syncPosition();
    const r1 = requestAnimationFrame(syncPosition);
    const r2 = requestAnimationFrame(() => requestAnimationFrame(syncPosition));
    const t = setTimeout(syncPosition, 80);

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
      suppressScrollUntilRef.current = Date.now() + 400;
      const currentY = getScrollPosition();
      lastScrollYRef.current = currentY;
      setIsScrolled(currentY > 40);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      const href = anchor?.getAttribute('href');
      if (href && href.includes('#')) {
        setIsVisible(true);
        suppressScrollUntilRef.current = Date.now() + 500;
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
        // Blur active element inside header on scroll
        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
          if (headerRef.current?.contains(document.activeElement)) {
            document.activeElement.blur();
          }
        }

        const rawScrollY = getScrollPosition();
        const docHeight = Math.max(
          document.documentElement?.scrollHeight || 0,
          document.body?.scrollHeight || 0
        );
        const maxScroll = Math.max(0, docHeight - window.innerHeight);

        // Clamp to avoid rubber-band overscroll
        const currentScrollY = maxScroll > 0 ? Math.min(rawScrollY, maxScroll) : rawScrollY;
        const prevScrollY = lastScrollYRef.current;
        const diff = currentScrollY - prevScrollY;

        setIsScrolled(currentScrollY > 40);

        if (Date.now() < suppressScrollUntilRef.current) {
          setIsVisible(true);
          accumulatedDeltaRef.current = 0;
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
          return;
        }

        // Always show near top
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

          // Promptly reveal on small upward movement (6px)
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

  const showHeader = isVisible || isMenuOpen || isKeyboardFocused;

  return (
    <>
      <header
        ref={headerRef}
        onFocus={(e) => {
          if ((e.target as HTMLElement)?.matches?.(':focus-visible')) {
            setIsKeyboardFocused(true);
            setIsVisible(true);
          }
        }}
        onBlur={(e) => {
          if (!headerRef.current?.contains(e.relatedTarget as Node | null)) {
            setIsKeyboardFocused(false);
          }
        }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${
          isTransparent
            ? 'bg-transparent border-b border-white/10 text-white'
            : 'border-b border-border bg-canvas/92 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(28,36,33,0.08)] text-ink'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:h-[76px] sm:gap-6 sm:px-8">
          <Link
            href="/"
            onClick={(e) => (e.currentTarget as HTMLElement).blur()}
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
              <span className={`flex flex-col border-l-2 pl-2.5 transition-colors sm:pl-3 ${
                isTransparent ? 'border-champagne-light text-white' : 'border-champagne text-ink'
              }`}>
                <span className={`font-serif text-lg font-medium tracking-tight transition-colors sm:text-[25px] sm:leading-none ${
                  isTransparent ? 'text-white group-hover:text-champagne-light' : 'text-ink group-hover:text-brand'
                }`}>
                  {siteConfig.displayName}
                </span>
                <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] sm:mt-1 sm:text-xs sm:tracking-[0.18em] ${
                  isTransparent ? 'text-ivory/80' : 'text-muted'
                }`}>
                  {siteConfig.publicLocation}
                </span>
              </span>
            )}
          </Link>

          <DesktopNav isTransparent={isTransparent} />

          <MobileNavigation
            onOpenChange={setIsMenuOpen}
            isTransparent={isTransparent}
          />
        </div>
      </header>

      {/* Layout offset spacer: Rendered on non-home pages so headings never hide behind fixed header */}
      {!isHome ? (
        <div aria-hidden="true" className="h-16 shrink-0 sm:h-[76px]" />
      ) : null}
    </>
  );
}
