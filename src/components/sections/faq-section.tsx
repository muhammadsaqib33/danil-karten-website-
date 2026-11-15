import Link from 'next/link';
import { generalFaqs } from '@/content/faqs';
import { siteConfig } from '@/content/site';
import { Accordion } from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-canvas py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Questions
              </p>
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-[clamp(1.9rem,2.8vw+0.85rem,2.75rem)] font-medium leading-tight text-ink"
            >
              Consultation FAQs
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Practical scheduling and privacy answers. Specific clinical
              recommendations are always tailored in person with Danielle
              Karten, NP, AGPCNP-BC.
            </p>
            <p className="pt-2 text-sm text-muted">
              Prefer to speak directly? Call{' '}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-hover"
              >
                {siteConfig.phoneDisplay}
              </a>{' '}
              or{' '}
              <Link
                href={siteConfig.primaryCta.href}
                className="font-medium text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-hover"
              >
                book online
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              idPrefix="home-faq"
              items={generalFaqs.map((faq) => ({
                id: faq.id,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
