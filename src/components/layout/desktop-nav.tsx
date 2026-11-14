'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-7 md:flex lg:gap-9"
    >
      {siteConfig.navigation.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`relative inline-flex min-h-[44px] items-center text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
              isActive
                ? 'font-semibold text-brand after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:bg-brand'
                : 'font-medium text-ink after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-center after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 hover:text-brand hover:after:scale-x-100'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href={siteConfig.headerCta.href}
        className={buttonClasses({ variant: 'primary', size: 'md' })}
      >
        {siteConfig.headerCta.label}
      </Link>
    </nav>
  );
}

