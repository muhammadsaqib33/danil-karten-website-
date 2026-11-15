'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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

  // Every page in Nurse Yara theme starts with a dark cinematic .phero hero
  const isTransparent = !isScrolled;

  useEffect(() => {
    accumulatedDeltaRef.current = 0;
    tickingRef.current = false;
    suppressScrollUntilRef.current = Date.now() + 150;

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

  useEffect(() => {
    lastScrollYRef.current = getScrollPosition();

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
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

        if (currentScrollY <= 48) {
          setIsVisible(true);
          accumulatedDeltaRef.current = 0;
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
          return;
        }

        if (diff > 0) {
          if (accumulatedDeltaRef.current < 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current = Math.min(60, accumulatedDeltaRef.current + diff);

          if (currentScrollY > 60 && (accumulatedDeltaRef.current >= 8 || diff >= 12)) {
            setIsVisible(false);
          }
        } else if (diff < 0) {
          if (accumulatedDeltaRef.current > 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current = Math.max(-60, accumulatedDeltaRef.current + diff);

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-in-out motion-reduce:transition-none ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent
          ? 'bg-transparent border-b border-transparent py-4 sm:py-5 text-white'
          : 'bg-[#faf4ee]/94 backdrop-blur-md border-b border-[#eadfd8] py-2.5 sm:py-3.5 shadow-[0_1px_30px_rgba(38,36,42,0.08)] text-[#2e2c31]'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={(e) => (e.currentTarget as HTMLElement).blur()}
          className="group inline-flex min-h-[44px] flex-col justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a15a]"
        >
          <span className={`font-serif text-lg font-semibold tracking-[0.32em] uppercase transition-colors sm:text-2xl ${
            isTransparent ? 'text-white group-hover:text-[#e3c894]' : 'text-[#1b191f] group-hover:text-[#b88d44]'
          }`}>
            {siteConfig.displayName}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] italic tracking-[0.16em] text-[#d4788f]">
            by Danielle Karten, NP
          </span>
        </Link>

        <DesktopNav isTransparent={isTransparent} />

        <MobileNavigation
          onOpenChange={setIsMenuOpen}
          isTransparent={isTransparent}
        />
      </div>
    </header>
  );
}
