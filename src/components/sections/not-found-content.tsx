import Link from 'next/link';
import { Phone } from 'lucide-react';
import { buttonClasses } from '@/components/ui/button';
import { siteConfig } from '@/content/site';

export function NotFoundContent() {
  return (
    <section className="flex flex-1 items-center bg-canvas py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
          404 · Page Not Found
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The page you requested may have moved, or the service may not
          currently be published. You can return home, explore our overview, or
          request a consultation below.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className={buttonClasses({ variant: 'primary', size: 'lg' })}
          >
            Return Home
          </Link>
          <Link
            href={siteConfig.primaryCta.href}
            className={buttonClasses({ variant: 'secondary', size: 'lg' })}
          >
            {siteConfig.primaryCta.label}
          </Link>
          <a
            href={siteConfig.phoneHref}
            className={buttonClasses({ variant: 'ghost', size: 'lg' })}
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
