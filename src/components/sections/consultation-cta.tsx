import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { homeContent, siteConfig } from '@/content/site';

interface ConsultationCtaProps {
  heading?: string;
  body?: string;
}

export function ConsultationCta({
  heading = homeContent.contactCta.heading,
  body = homeContent.contactCta.body,
}: ConsultationCtaProps) {
  return (
    <section
      aria-labelledby="consultation-cta-heading"
      className="nurse-yara-band py-16 sm:py-20 text-center text-white"
    >
      <div className="orb" aria-hidden="true" />

      <div className="site-container relative z-10">
        <h2
          id="consultation-cta-heading"
          className="font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] font-light leading-[1.1] text-white max-w-3xl mx-auto"
        >
          {heading.includes('consultation') ? (
            <>
              {heading.replace(/consultation/i, '')} <em>consultation.</em>
            </>
          ) : (
            heading
          )}
        </h2>

        <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#c8bcc2] max-w-xl mx-auto">
          {body}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={siteConfig.primaryCta.href}
            className="cta-solid"
          >
            {siteConfig.primaryCta.label}
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="cta-ghost"
          >
            <Phone className="h-4 w-4 mr-2 inline" aria-hidden="true" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs font-light tracking-wide text-[#8d8289]">
          <MapPin className="h-3.5 w-3.5 text-[#c9a15a]" aria-hidden="true" />
          <span>{siteConfig.publicLocation} · Private Suite by Appointment</span>
        </p>
      </div>
    </section>
  );
}
