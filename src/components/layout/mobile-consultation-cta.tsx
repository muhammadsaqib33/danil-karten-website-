'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

export function MobileConsultationCta() {
  const pathname = usePathname();

  if (pathname === '/contact') {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Quick consultation actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-canvas/92 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden shadow-[0_-4px_20px_rgba(28,36,33,0.08)]"
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.displayName} at ${siteConfig.phoneDisplay}`}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-border bg-surface-card px-4 text-sm font-medium text-ink transition-all duration-200 hover:border-brand/50 hover:shadow-xs active:translate-y-0"
        >
          <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
          <span>Call</span>
        </a>
        <Link
          href={siteConfig.primaryCta.href}
          className={buttonClasses({
            variant: 'primary',
            size: 'md',
            className: 'flex-1',
          })}
        >
          {siteConfig.primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
