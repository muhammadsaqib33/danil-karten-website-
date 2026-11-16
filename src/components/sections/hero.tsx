import Link from 'next/link';
import Image from 'next/image';
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
          </div>

          {/* Right Column: Floating Luxury Editorial Glass Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="phero-glass-card">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <span className="font-serif text-sm italic tracking-wide text-[#e3c894]">
                  Clinical Philosophy
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/60">
                  New York, NY
                </span>
              </div>

              <blockquote className="mt-4">
                <p className="font-serif text-[1.35rem] font-light leading-snug text-white sm:text-[1.5rem]">
                  &ldquo;Subtle aesthetic care should soften lines and restore balance &mdash; without changing your natural expression.&rdquo;
                </p>
                <footer className="mt-3">
                  <div className="font-serif text-[15px] font-medium text-[#e3c894]">
                    Danielle Karten
                  </div>
                  <div className="text-[11px] font-light tracking-wide text-white/70">
                    NP, AGPCNP-BC &middot; Nurse Practitioner
                  </div>
                </footer>
              </blockquote>

              <div className="my-4 h-px w-full bg-white/10" />

              <div className="space-y-2 text-[13px] font-light text-[#dfdad5]">
                <div className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-[#c9a15a]" aria-hidden="true" />
                  <span>Unhurried, comprehensive facial anatomy assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-[#c9a15a]" aria-hidden="true" />
                  <span>Conservative, natural-looking dosing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-[#c9a15a]" aria-hidden="true" />
                  <span>Private suite appointments in Manhattan</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5 text-xs">
                <span className="text-white/60">By Appointment</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 font-medium text-[#e3c894] transition-colors hover:text-white"
                >
                  <span>About Danielle</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
