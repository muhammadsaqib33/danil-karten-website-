import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { getHeroImage } from '@/content/images';

interface HeroProps {
  isPreviewMode: boolean;
}

export function Hero({ isPreviewMode }: HeroProps) {
  const heroImage = getHeroImage(isPreviewMode);
  const imageSrc = heroImage?.image.src || '/images/hero/home-clinic-hero.jpg';

  return (
    <header className="phero">
      <picture>
        <Image
          src={imageSrc}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="phero-img"
          style={{
            objectPosition: heroImage?.image.objectPosition ?? 'center center',
          }}
        />
      </picture>

      <div className="phero-grade" aria-hidden="true" />

      <div className="phero-inner">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Primary Editorial Narrative */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h1>
              Thoughtful care. Keep your <em>expression.</em>
            </h1>

            <p>
              Personalized aesthetic consultations with Danielle Karten, NP,
              AGPCNP-BC in New York. Carefully placed, treatments soften expression
              lines, restore natural facial balance, and support preventative skin
              longevity customized to your muscle anatomy.
            </p>

            <div className="phero-ctas">
              <Link
                href={siteConfig.primaryCta.href}
                className="cta-solid"
              >
                {siteConfig.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.secondaryCta.href}
                className="cta-ghost"
              >
                {siteConfig.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-[#c9a15a]" aria-hidden="true" />
              <span>Private Appointment Suite · In-Person Consultations in New York</span>
            </div>
          </div>

          {/* Right Column: Floating Luxury Editorial Glass Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="phero-glass-card">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4788f]">
                  Clinical Philosophy
                </span>
                <span className="rounded-full border border-[#c9a15a]/40 bg-[#c9a15a]/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[#e3c894]">
                  Manhattan, NY
                </span>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-light leading-snug text-white sm:text-[1.7rem]">
                Individualized Care. <em>Natural Results.</em>
              </h3>

              <p className="mt-1 text-xs font-medium tracking-wide text-[#e3c894]">
                Danielle Karten, NP, AGPCNP-BC
              </p>

              <div className="my-5 h-px w-full bg-gradient-to-r from-[#c9a15a]/40 via-white/15 to-transparent" />

              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a15a]/20 text-[#e3c894]">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Facial Anatomy Assessment
                    </strong>
                    <span className="text-[13px] leading-relaxed text-white/80">
                      Evaluated for individual dynamic muscle strength and facial balance.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a15a]/20 text-[#e3c894]">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Conservative Precision
                    </strong>
                    <span className="text-[13px] leading-relaxed text-white/80">
                      Subtle dosing planned to soften lines while preserving natural movement.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a15a]/20 text-[#e3c894]">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Private Suite Atmosphere
                    </strong>
                    <span className="text-[13px] leading-relaxed text-white/80">
                      Unhurried, confidential consultations dedicated exclusively to you.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                <span className="text-white/60">Appointments by Reservation</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#e3c894] transition-colors hover:text-white"
                >
                  <span>Meet the Clinician</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
