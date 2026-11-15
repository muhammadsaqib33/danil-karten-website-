'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { siteConfig } from '@/content/site';

interface MobileNavigationProps {
  onOpenChange?: (isOpen: boolean) => void;
  isTransparent?: boolean;
}

export function MobileNavigation({
  onOpenChange,
  isTransparent = false,
}: MobileNavigationProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    wasOpenRef.current = false;
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    wasOpenRef.current = false;
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
          isTransparent && !isOpen
            ? 'border-white/30 bg-black/35 text-white backdrop-blur-md hover:bg-black/50'
            : 'border-[#eadfd8] bg-white text-[#2e2c31] hover:border-[#c9a15a]'
        }`}
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1b191f]/60 backdrop-blur-sm transition-opacity duration-300"
          />
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col justify-between border-l border-[rgba(201,161,90,0.4)] bg-gradient-to-b from-[#faf4ee] to-[#f3e9e2] p-6 shadow-2xl transition-transform duration-300 ease-out"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#eadfd8] pb-4">
                <div>
                  <span className="font-serif text-xl font-semibold tracking-wider text-[#1b191f]">
                    {siteConfig.displayName}
                  </span>
                  <span className="block font-serif text-[11px] italic tracking-widest text-[#d4788f]">
                    by Danielle Karten, NP
                  </span>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#2e2c31] hover:bg-[#faf4ee]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    aria-current={pathname === '/' ? 'page' : undefined}
                    className={`flex min-h-[46px] items-center rounded-lg px-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                      pathname === '/'
                        ? 'bg-[#c9a15a]/15 font-bold text-[#b88d44]'
                        : 'text-[#2e2c31] hover:bg-white/80'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                {siteConfig.navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-[46px] items-center rounded-lg px-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                          isActive
                            ? 'bg-[#c9a15a]/15 font-bold text-[#b88d44]'
                            : 'text-[#2e2c31] hover:bg-white/80'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-3 border-t border-[#eadfd8] pt-5">
              <Link
                href={siteConfig.primaryCta.href}
                onClick={handleLinkClick}
                className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#c9a15a] to-[#dcb877] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b191f] shadow-sm hover:from-[#d8b26c] hover:to-[#e6c88e]"
              >
                {siteConfig.primaryCta.label}
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#eadfd8] bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#2e2c31] hover:bg-[#faf4ee]"
              >
                <Phone className="h-4 w-4 text-[#c9a15a]" aria-hidden="true" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
