import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { providerProfile } from '@/content/provider';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#eadfd8]/20 bg-[#1b191f] pb-24 pt-16 text-[#8d8289] md:pb-16 lg:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="space-y-4 md:col-span-5">
            <div>
              <p className="font-serif text-2xl font-medium tracking-[0.3em] uppercase text-[#d6c9ce] sm:text-3xl">
                {siteConfig.displayName}
              </p>
              <p className="font-serif text-sm italic tracking-widest text-[#d4788f] mt-1">
                by {providerProfile.fullName}, {providerProfile.credentials}
              </p>
            </div>

            <p className="text-xs font-light leading-relaxed text-[#c8bcc2] max-w-sm">
              Board-certified Nurse Practitioner aesthetic medicine in New York,
              focused on natural facial harmony, restrained dosing, and individualized care.
            </p>

            <div className="space-y-2 pt-2 text-xs font-light text-[#8d8289]">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#c9a15a]" aria-hidden="true" />
                <span>{siteConfig.publicLocation} · By appointment</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#c9a15a]" aria-hidden="true" />
                <a
                  href={siteConfig.phoneHref}
                  className="font-medium text-[#faf4ee] underline decoration-[#c9a15a]/40 underline-offset-4 transition-colors hover:text-[#e3c894]"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e3c894]">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em]">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-[32px] items-center text-[#8d8289] transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[32px] items-center text-[#8d8289] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex min-h-[32px] items-center font-medium text-[#c9a15a] transition-colors hover:text-white"
                >
                  {siteConfig.primaryCta.label}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5 md:col-span-3">
            <div>
              <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e3c894]">
                Legal &amp; Access
              </h2>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.14em]">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-flex min-h-[32px] items-center text-[#8d8289] transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="inline-flex min-h-[32px] items-center text-[#8d8289] transition-colors hover:text-white"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11.5px] font-light text-[#8d8289] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.legalBusinessName}. All rights reserved.
          </p>
          <p>
            General educational information only · Does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
