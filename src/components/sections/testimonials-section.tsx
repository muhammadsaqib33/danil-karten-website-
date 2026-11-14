import { siteConfig } from '@/content/site';

export function TestimonialsSection() {
  const approvedTestimonials = siteConfig.testimonials.filter(
    (item) => item.approvedForPublicDisplay,
  );

  if (approvedTestimonials.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-surface/65 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
            Client Perspectives
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-[clamp(1.85rem,2.8vw+0.85rem,2.65rem)] font-medium leading-tight text-ink"
          >
            Patient experiences
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approvedTestimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface-card p-6 sm:p-8"
            >
              <p className="text-sm leading-relaxed text-ink/90 sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-5 border-t border-border pt-4 text-xs font-medium uppercase tracking-wider text-muted">
                {item.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
