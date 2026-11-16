import type { FaqItem } from '@/types/treatment';

export const generalFaqs: FaqItem[] = [
  {
    id: 'botox-vs-fillers',
    question: 'What is the difference between Botox and Dermal Fillers?',
    answer:
      'Botox relaxes targeted facial muscles to smooth dynamic expression lines (such as forehead lines, frown lines, and crow’s feet). Dermal fillers (such as Revanesse® hyaluronic acid) restore lost volume, shape lips, and contour facial structures like cheeks and jawline.',
  },
  {
    id: 'what-is-pdrn',
    question: 'What is PDRN Salmon DNA cellular treatment?',
    answer:
      'PDRN (Polydeoxyribonucleotide) is a regenerative cellular treatment derived from salmon DNA that stimulates natural tissue repair, collagen synthesis, and barrier healing. It calms redness, refines texture, and restores radiant glow with minimal downtime.',
  },
  {
    id: 'why-revanesse',
    question: 'Why does Dani specialize in Revanesse® dermal fillers?',
    answer:
      'Revanesse fillers utilize smooth, uniform spherical particle technology that integrates effortlessly into facial tissue. This ensures results move naturally with your expressions, delivering soft volume without feeling stiff or overfilled.',
  },
  {
    id: 'request-vs-booking',
    question: 'Does submitting the online form immediately confirm an appointment time?',
    answer:
      'No. Submitting the form sends a consultation request so Danielle Karten, NP, AGPCNP-BC can review your preferred contact method and coordinate scheduling with you directly.',
  },
  {
    id: 'what-happens-consultation',
    question: 'What happens during an initial aesthetic consultation?',
    answer:
      'Your consultation focuses on understanding your goals, reviewing relevant clinical considerations, discussing appropriate options—including potential risks and limitations—and deciding together whether a treatment plan makes sense for you.',
    requiresClinicalReview: true,
  },
  {
    id: 'medical-info-privacy',
    question: 'Should I include medical history or clinical photos in my consultation request?',
    answer:
      'No. Please do not submit medical history, medications, allergies, date of birth, or clinical photographs through the public website form. Clinical health information is collected separately through private practice intake.',
  },
  {
    id: 'pricing-and-policies',
    question: 'How are treatment pricing, scheduling hours, and appointment policies shared?',
    answer:
      'Individualized treatment plans and current scheduling availability are discussed during consultation coordination. You may also call 917-855-7737 with general appointment questions.',
  },
  {
    id: 'location-details',
    question: 'Where is the practice located?',
    answer:
      'Care is provided in New York, NY. Specific arrival details are shared privately once your appointment is confirmed.',
  },
];
