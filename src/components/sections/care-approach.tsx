import { homeContent } from '@/content/site';

export function CareApproach() {
  return (
    <section
      aria-labelledby="care-approach-heading"
      className="bg-brand py-14 text-ivory sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-4 lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-champagne" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-light">
                {homeContent.careApproach.eyebrow}
              </p>
            </div>
            <h2
              id="care-approach-heading"
              className="font-serif text-[clamp(2rem,3vw+0.85rem,3rem)] font-medium leading-[1.12] text-white"
            >
              {homeContent.careApproach.heading}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ivory/90">
              {homeContent.careApproach.intro}
            </p>
          </div>

          <ol className="divide-y divide-champagne/25 border-y border-champagne/25 lg:col-span-7">
            {homeContent.careApproach.pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-7"
              >
                <span className="font-serif text-2xl font-medium text-champagne-light sm:col-span-2">
                  {pillar.number}
                </span>
                <div className="space-y-2 sm:col-span-10">
                  <h3 className="font-serif text-2xl font-medium leading-snug text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ivory/90">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
