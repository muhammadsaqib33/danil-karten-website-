'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';
import { buttonClasses } from '@/components/ui/button';

interface DesktopNavProps {
  isTransparent?: boolean;
}

export function DesktopNav({ isTransparent = false }: DesktopNavProps) {
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
            onClick={(e) => (e.currentTarget as HTMLElement).blur()}
            aria-current={isActive ? 'page' : undefined}
            className={`nav-link-underline inline-flex min-h-[44px] items-center text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isTransparent
                ? isActive
                  ? 'text-white font-semibold'
                  : 'text-white/90 hover:text-white'
                : isActive
                  ? 'text-brand font-semibold'
                  : 'text-ink hover:text-brand'
            }`}
          >
            {item.label}
          </Link>
        );
      })}

      <Link
        href={siteConfig.headerCta.href}
        onClick={(e) => (e.currentTarget as HTMLElement).blur()}
        className={buttonClasses({
          variant: isTransparent ? 'inverse' : 'primary',
          size: 'md',
        })}
      >
        {siteConfig.headerCta.label}
      </Link>
    </nav>
  );
}
