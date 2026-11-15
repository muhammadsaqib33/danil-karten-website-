import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { providerProfile } from '@/content/provider';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-champagne/20 bg-[#0B1E19] pb-20 pt-12 text-ivory md:pb-12 lg:pt-16">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="space-y-3 md:col-span-4">
            <p className="font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {siteConfig.displayName}
            </p>
            <p className="text-sm font-medium text-champagne-light">
              {providerProfile.displayNameWithCredentials}
            </p>
            <div className="space-y-2 pt-2 text-sm text-ivory/80">
              <p className="flex items-center gap-2">
                <MapPin
                  className="h-4 w-4 shrink-0 text-champagne-light"
                  aria-hidden="true"
                />
                <span>{siteConfig.publicLocation} · By appointment</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0 text-champagne-light"
                  aria-hidden="true"
                />
                <a
                  href={siteConfig.phoneHref}
                  className="font-medium text-white underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-champagne-light"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-champagne-light">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-[36px] items-center text-ivory/85 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center text-ivory/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex min-h-[36px] items-center font-medium text-champagne-light transition-colors hover:text-white"
                >
                  {siteConfig.primaryCta.label}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-3">
            <div>
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-champagne-light">
                Policies &amp; Accessibility
              </h2>
              <ul className="mt-4 space-y-1.5 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-flex min-h-[36px] items-center text-ivory/85 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="inline-flex min-h-[36px] items-center text-ivory/85 transition-colors hover:text-white"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>

            {siteConfig.socialLinks.length > 0 ? (
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-champagne-light">
                  Social
                </h2>
                <ul className="mt-2.5 space-y-1.5 text-sm">
                  {siteConfig.socialLinks.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center text-ivory/85 transition-colors hover:text-white"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.legalBusinessName}. All rights
            reserved.
          </p>
          <p>
            Information on this site is for general educational purposes and
            does not constitute individual medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
