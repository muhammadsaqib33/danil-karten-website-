'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

interface MobileNavigationProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export function MobileNavigation({ onOpenChange }: MobileNavigationProps = {}) {
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

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-card text-ink transition-colors hover:border-brand/50"
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
            className="fixed inset-0 bg-emerald-deep/40 backdrop-blur-[2px]"
          />
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col justify-between border-l border-border bg-canvas p-6 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-serif text-xl font-semibold text-ink">
                  {siteConfig.displayName}
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-card text-ink hover:bg-surface"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-6 space-y-1.5">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === '/' ? 'page' : undefined}
                    className={`flex min-h-[46px] items-center rounded-md px-3.5 text-base font-medium transition-colors ${
                      pathname === '/'
                        ? 'bg-brand/10 font-semibold text-brand'
                        : 'text-ink hover:bg-surface'
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
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-[46px] items-center rounded-md px-3.5 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-brand/10 font-semibold text-brand'
                            : 'text-ink hover:bg-surface'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-3 border-t border-border pt-5">
              <Link
                href={siteConfig.primaryCta.href}
                onClick={() => setIsOpen(false)}
                className={buttonClasses({
                  variant: 'primary',
                  size: 'lg',
                  className: 'w-full',
                })}
              >
                {siteConfig.primaryCta.label}
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-border bg-surface-card px-4 py-2 text-sm font-medium text-ink hover:bg-surface"
              >
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
