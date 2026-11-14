'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button, buttonClasses } from '@/components/ui/button';
import { siteConfig } from '@/content/site';

interface MarketingErrorProps {
  reset: () => void;
}

export default function MarketingError({ reset }: MarketingErrorProps) {
  return (
    <section className="bg-canvas py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
          Something went wrong
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ink">
          We encountered an unexpected issue
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Please try reloading this view, or contact {siteConfig.displayName}{' '}
          directly by phone.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" size="lg" onClick={() => reset()}>
            Try Again
          </Button>
          <Link
            href="/"
            className={buttonClasses({ variant: 'secondary', size: 'lg' })}
          >
            Return Home
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
