import { homeContent } from '@/content/site';

export function VisitSteps() {
  return (
    <section
      aria-labelledby="visit-steps-heading"
      className="bg-surface-card py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-champagne" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {homeContent.visitSteps.eyebrow}
            </p>
          </div>
          <h2
            id="visit-steps-heading"
            className="font-serif text-[clamp(1.9rem,2.8vw+0.85rem,2.75rem)] font-medium leading-tight text-ink"
          >
            {homeContent.visitSteps.heading}
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.visitSteps.steps.map((step) => (
            <li
              key={step.stepNumber}
              className="flex flex-col rounded-lg border border-border bg-canvas p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-sm sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-champagne/55 bg-rose-soft/65 font-serif text-xl font-semibold text-brand">
                  {step.stepNumber}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-4 h-px flex-1 bg-border"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
