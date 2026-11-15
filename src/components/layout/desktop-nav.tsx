'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';

interface DesktopNavProps {
  isTransparent?: boolean;
}

export function DesktopNav({ isTransparent = false }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-7 md:flex lg:gap-8"
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
            className={`nav-link-underline inline-flex min-h-[44px] items-center text-[12px] font-medium uppercase tracking-[0.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a15a] ${
              isTransparent
                ? isActive
                  ? 'text-[#e3c894] font-semibold'
                  : 'text-white/90 hover:text-[#e3c894]'
                : isActive
                  ? 'text-[#b88d44] font-semibold'
                  : 'text-[#2e2c31] hover:text-[#b88d44]'
            }`}
          >
            {item.label}
          </Link>
        );
      })}

      <Link
        href={siteConfig.headerCta.href}
        onClick={(e) => (e.currentTarget as HTMLElement).blur()}
        className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a] hover:-translate-y-0.5 ${
          isTransparent
            ? 'border border-[#c9a15a] bg-[#c9a15a]/10 text-white hover:bg-[#c9a15a] hover:text-[#1b191f] hover:shadow-[0_8px_24px_rgba(201,161,90,0.35)]'
            : 'border border-[#c9a15a] bg-gradient-to-r from-[#c9a15a] to-[#dcb877] text-[#1b191f] hover:from-[#d8b26c] hover:to-[#e6c88e] hover:shadow-[0_8px_24px_rgba(201,161,90,0.35)]'
        }`}
      >
        {siteConfig.headerCta.label}
      </Link>
    </nav>
  );
}
