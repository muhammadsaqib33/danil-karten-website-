import Link from 'next/link';
import { generalFaqs } from '@/content/faqs';
import { siteConfig } from '@/content/site';
import { Accordion } from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-18 sm:py-24 max-w-[1280px] mx-auto px-5 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-4 lg:col-span-4">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4788f]">
            Questions, Answered
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-[clamp(2.1rem,3.8vw,3.2rem)] font-light leading-tight text-[#1b191f]"
          >
            Visiting us: <em>clarity first.</em>
          </h2>
          <p className="lead text-[15.5px]">
            Every treatment is tailored in person. Here are practical answers about
            consultation flow, safety protocols, and what to expect when visiting our
            private New York suite.
          </p>
          <p className="pt-2 text-sm text-[#403a3d]">
            Prefer to speak directly? Call{' '}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-[#966d24] underline decoration-[#966d24]/50 underline-offset-4 hover:text-[#785416]"
            >
              {siteConfig.phoneDisplay}
            </a>{' '}
            or{' '}
            <Link
              href={siteConfig.primaryCta.href}
              className="font-semibold text-[#966d24] underline decoration-[#966d24]/50 underline-offset-4 hover:text-[#785416]"
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
    </section>
  );
}
