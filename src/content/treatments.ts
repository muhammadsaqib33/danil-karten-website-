import type { ApprovedImage, Treatment } from '@/types/treatment';

/**
 * Candidate aesthetic services referenced in CRM planning notes.
 *
 * IMPORTANT:
 * - Every entry defaults to `publicationStatus: 'draft'` and
 *   `clinicalReviewStatus: 'pending_review'` until confirmed by
 *   Danielle Karten, NP, AGPCNP-BC.
 * - Production routes, navigation, and sitemap.xml only expose entries with
 *   `publicationStatus === 'approved'`.
 */
export const treatmentsData: Treatment[] = [
  {
    slug: 'neuromodulators',
    displayName: 'Botox & Dysport',
    cardTitle: 'Botox & Dysport',
    category: 'Injectables',
    relatedOptions: ['Botox', 'Dysport'],
    isFeatured: true,
    shortDescription:
      'Smooth fine lines and wrinkles for a refreshed, youthful appearance while preserving natural facial expression.',
    fullIntroduction:
      'Neuromodulator treatments use purified botulinum toxin formulations—such as Botox or Dysport—to temporarily relax targeted facial muscles involved in repetitive expression lines. Dosing and placement are customized to soften lines while keeping you looking completely like yourself.',
    potentialGoals: [
      'Smoothing horizontal forehead lines, frown lines (11s), and crow’s feet',
      'Masseter jawline slimming and facial tension relief',
      'Subtle lip flip and perioral line softening',
      'Maintaining natural facial animation with conservative dosing',
    ],
    consultationInvolves: [
      'Comprehensive assessment of facial musculature at rest and in animation',
      'Review of your aesthetic priorities, medical history, and past neuromodulator treatments',
      'Individualized muscle mapping for precise, symmetrical placement',
    ],
    whatToExpect: [
      'Your provider maps targeted muscle groups and cleanses the treatment area.',
      'Small, precise micro-injections are placed with ultra-fine needles in just 10–15 minutes.',
      'Post-care guidance is reviewed before you return to your day with virtually no downtime.',
    ],
    generalRecovery: [
      'Mild localized redness or tiny bumps at injection sites usually fade within 20–30 minutes.',
      'Avoid strenuous workouts, lying flat, or rubbing the treated area for 4–6 hours.',
      'Results begin to emerge within 3 to 7 days, with full relaxation settling in at 10 to 14 days.',
    ],
    risksAndLimitations: [
      'Temporary mild bruising, localized tenderness, or mild headache may occasionally occur.',
      'Neuromodulators relax dynamic muscle movement; static lines or volume loss are addressed with fillers or skin therapies.',
      'Results typically last 3 to 4 months before muscle movement gradually returns.',
    ],
    suitabilityConsiderations: [
      'Determined individually during clinical consultation with Danielle Karten, NP.',
      'Contraindicated during pregnancy, breastfeeding, or in individuals with specific neuromuscular disorders.',
    ],
    faqs: [
      {
        question: 'How does Botox work on facial muscles?',
        answer:
          'Botox works by temporarily blocking nerve signals to targeted muscles. When the muscles relax, the overlying skin smooths out, preventing lines from deepening while keeping your natural expressions intact.',
      },
      {
        question: 'How soon do results show up and how long do they last?',
        answer:
          'Most people start seeing results within 3 to 7 days. The full effect settles in at 10 to 14 days and lasts approximately 3 to 4 months, after which muscles gradually regain movement.',
      },
      {
        question: 'Will my face look frozen or unnatural?',
        answer:
          'Never. Dani specializes in conservative dosing and precise placement, ensuring your forehead and eyes move naturally while looking refreshed and rested.',
      },
    ],
    image: {
      src: '/images/treatments/neuromodulators.jpg',
      alt: 'Danielle Karten evaluating facial symmetry for Botox and Dysport treatment',
      width: 1200,
      height: 896,
      objectPosition: '50% 25%',
    },
    demoImage: {
      src: '/images/treatments/neuromodulators.jpg',
      alt: 'Danielle Karten evaluating facial symmetry for Botox and Dysport treatment',
      width: 1200,
      height: 896,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'dermal-fillers',
    displayName: 'Dermal Fillers — Revanesse®',
    cardTitle: 'Revanesse® & HA Fillers',
    category: 'Injectables',
    relatedOptions: ['Revanesse® Lips', 'Hyaluronic Acid Dermal Fillers'],
    isFeatured: true,
    shortDescription:
      'Restore volume, enhance features, and bring balance to your natural beauty with premium Revanesse® fillers.',
    fullIntroduction:
      'Dermal fillers are smooth hyaluronic acid injectables designed to restore lost volume, refine lip contours, soften facial folds, and enhance structural balance. Dani exclusively uses high-quality products like Revanesse® for results that move seamlessly with your natural facial expressions.',
    potentialGoals: [
      'Subtle lip volume restoration, border definition, and hydration',
      'Cheek contouring and midface structural support',
      'Softening smile lines (nasolabial folds) and marionette lines',
      'Chin projection and jawline definition for overall facial balance',
    ],
    consultationInvolves: [
      'Three-dimensional anatomical evaluation of facial symmetry and volume ratios',
      'Discussion of primary aesthetic goals, filler history, and product selection',
      'Personalized mapping to ensure smooth, natural integration without overfilling',
    ],
    whatToExpect: [
      'The treatment area is cleansed and topical numbing is applied for maximum comfort.',
      'Filler is placed meticulously in targeted tissue planes using fine needles or cannulas.',
      'Immediate results are reviewed together, with aftercare instructions provided.',
    ],
    generalRecovery: [
      'Mild swelling, tenderness, or slight bruising is normal for a few days.',
      'Avoid strenuous exercise, alcohol, and blood thinners for 24–48 hours to minimize swelling.',
      'Final results settle beautifully within 1 to 2 weeks as product integrates with tissue.',
    ],
    risksAndLimitations: [
      'Potential risks include temporary swelling, bruising, asymmetry, or localized tenderness.',
      'Hyaluronic acid fillers can be adjusted or dissolved with hyaluronidase if ever indicated.',
      'Results typically last 6 to 12+ months depending on treatment area and individual metabolism.',
    ],
    suitabilityConsiderations: [
      'Assessed during in-person clinical consultation with Danielle Karten, NP.',
      'Deferred if active skin infections, cold sores, or severe allergies are present.',
    ],
    faqs: [
      {
        question: 'Why choose Revanesse® fillers?',
        answer:
          'Revanesse fillers feature uniform, smooth spherical particle technology that integrates seamlessly with facial tissue. They provide soft, natural movement with facial animation rather than a stiff look, and cause minimal swelling.',
      },
      {
        question: 'What if I don’t like the results?',
        answer:
          'Hyaluronic acid fillers like Revanesse can be completely dissolved using an enzyme called hyaluronidase, providing peace of mind and flexibility.',
      },
      {
        question: 'Can I wear makeup after my filler appointment?',
        answer:
          'We recommend waiting at least 6 hours after treatment before applying makeup to allow the injection sites to close and minimize irritation.',
      },
    ],
    image: {
      src: '/images/treatments/revanesse-filler-prep.webp',
      alt: 'Revanesse Lips hyaluronic acid injectable syringes and clinical preparation',
      width: 1200,
      height: 900,
      objectPosition: '50% 50%',
    },
    demoImage: {
      src: '/images/treatments/dermal-fillers.jpg',
      alt: 'Three-quarter editorial beauty profile highlighting balanced cheek and lip contour',
      width: 1200,
      height: 896,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'pdrn',
    displayName: 'PDRN Salmon DNA',
    cardTitle: 'PDRN Salmon DNA',
    category: 'Skin & Regenerative',
    relatedOptions: ['Polydeoxyribonucleotide cellular therapy', 'Salmon DNA regenerative infusion'],
    isFeatured: true,
    shortDescription:
      'Harness cellular regenerative science to repair skin, reduce redness, improve texture, and bring out your natural radiance.',
    fullIntroduction:
      'PDRN (Polydeoxyribonucleotide) is a breakthrough cellular regenerative therapy derived from salmon DNA. Extensively studied in medicine and dermatology, PDRN works deep within the skin layers to encourage new cellular growth, calm inflammation, and restore resilience to tired or sensitized skin.',
    potentialGoals: [
      'Stimulating natural collagen regeneration and cellular tissue repair',
      'Calming persistent redness, sensitivity, and rosacea-prone skin',
      'Refining skin texture, pore appearance, and post-acne marks',
      'Restoring deep hydration and youthful radiance without invasive peeling',
    ],
    consultationInvolves: [
      'Comprehensive skin barrier assessment and clinical history evaluation',
      'Discussion of treatment areas, cellular benefits, and recommended session protocols',
      'Screening for fish allergies or active dermatological contraindications',
    ],
    whatToExpect: [
      'The skin is thoroughly cleansed and prepared in our private clinical suite.',
      'PDRN is delivered precisely via micro-injections or gentle microneedling in under 45 minutes.',
      'A soothing post-treatment barrier recovery serum is applied before you leave.',
    ],
    generalRecovery: [
      'Mild localized redness or slight puffiness is common and typically resolves within 24–48 hours.',
      'Most clients return to normal daily routines immediately after treatment.',
      'Skin quality, hydration, and glow progressively improve over 2–4 weeks.',
    ],
    risksAndLimitations: [
      'Temporary redness, mild swelling, or pinpoint sensitivity at injection sites.',
      'Requires a series of 2–3 sessions spaced several weeks apart for optimal cellular response.',
      'Contraindicated in individuals with documented salmon or fish allergies.',
    ],
    suitabilityConsiderations: [
      'Ideal for anyone seeking gentle skin renewal, barrier repair, and radiant complexion.',
      'Requires in-person consultation with Danielle Karten, NP to confirm candidacy.',
    ],
    faqs: [
      {
        question: 'What is PDRN salmon DNA treatment?',
        answer:
          'PDRN stands for polydeoxyribonucleotide, a bioactive compound extracted from salmon DNA. It actively stimulates cellular repair, microcirculation, and new collagen production to rejuvenate stressed or aging skin.',
      },
      {
        question: 'How does the treatment process work and is there downtime?',
        answer:
          'The treatment is performed in our private suite using gentle micro-injections or microneedling. The entire visit takes less than an hour, with minimal downtime—mild redness subsides quickly.',
      },
      {
        question: 'Who is a good candidate for PDRN?',
        answer:
          'Anyone dealing with dullness, redness, fine texture concerns, or acne scarring who wants a gentle, non-laser regenerative approach to skin renewal.',
      },
    ],
    image: {
      src: '/images/treatments/pdrn-treatment.webp',
      alt: 'PDRN salmon DNA polynucleotide regenerative skin treatment',
      width: 1080,
      height: 1080,
      objectPosition: '50% 50%',
    },
    demoImage: {
      src: '/images/treatments/pdrn-treatment.webp',
      alt: 'PDRN salmon DNA polynucleotide regenerative skin treatment',
      width: 1080,
      height: 1080,
      objectPosition: '50% 50%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'chemical-peels',
    displayName: 'Chemical Peels & Medical Skincare',
    cardTitle: 'Chemical Peels',
    category: 'Skin Resurfacing',
    relatedOptions: ['Clinical chemical peels', 'Medical-grade skin rejuvenation'],
    isFeatured: true,
    shortDescription:
      'Advanced clinical skin treatments that rejuvenate, hydrate, and bring out your natural glow.',
    fullIntroduction:
      'Our medical-grade chemical peels use carefully calibrated exfoliating solutions to dissolve dull outer surface layers, accelerate cell turnover, and reveal fresh, radiant skin beneath. Treatments are customized to your specific skin profile and tolerance.',
    potentialGoals: [
      'Brightening skin tone and reducing hyperpigmentation or sun damage',
      'Smoothing rough texture and refining enlarged pores',
      'Clearing congestion and revitalizing skin luminosity',
    ],
    consultationInvolves: [
      'Fitzpatrick skin typing and assessment of barrier health and sensitivity',
      'Discussion of peel depth (superficial vs. medium) and post-treatment lifestyle',
      'Review of pre-treatment skincare instructions and sun-protection requirements',
    ],
    whatToExpect: [
      'Skin is cleansed and prepped before the customized peel solution is applied.',
      'A mild tingling or warming sensation may be felt for a few minutes.',
      'Solution is neutralized, followed by cooling barrier hydration and broad-spectrum sunscreen.',
    ],
    generalRecovery: [
      'Mild redness and tightness can be expected for 24–48 hours.',
      'Light flaking or peeling typically occurs between days 3 and 7.',
      'Strict daily sunscreen use is essential to protect newly revealed skin.',
    ],
    risksAndLimitations: [
      'Temporary erythema, flaking, dryness, or post-inflammatory hyperpigmentation if sun guidance is neglected.',
      'Individual results depend on skin condition and consistency of aftercare.',
    ],
    suitabilityConsiderations: [
      'Not performed during pregnancy or on active eczema, open wounds, or sunburn.',
      'Must discontinue active retinoids 3–5 days prior to treatment.',
    ],
    faqs: [
      {
        question: 'Will my skin visibly peel after every peel?',
        answer:
          'Not always. Modern clinical peels work on a microscopic cellular level; visible flaking varies depending on peel depth and your skin’s hydration status.',
      },
    ],
    image: {
      src: '/images/treatments/chemical-peels.jpg',
      alt: 'Advanced medical facial peel and skin revitalization',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    demoImage: {
      src: '/images/treatments/chemical-peels.jpg',
      alt: 'Close-up editorial portrait highlighting clear luminous skin in morning light',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'prp',
    displayName: 'Platelet-Rich Plasma (PRP)',
    cardTitle: 'PRP Therapy',
    category: 'Skin & Regenerative',
    relatedOptions: ['Platelet-Rich Plasma (PRP)', 'Autologous growth factor therapy'],
    isFeatured: true,
    shortDescription:
      'Harness your body’s natural healing power and concentrated growth factors to improve skin texture, tone, and radiance.',
    fullIntroduction:
      'Platelet-Rich Plasma (PRP) is an autologous regenerative treatment utilizing concentrated platelets and growth factors isolated from a small sample of your own blood. PRP stimulates natural collagen production, tissue repair, and deep skin rejuvenation without synthetic additives.',
    potentialGoals: [
      'Enhancing overall skin radiance, firmness, and elasticity',
      'Rejuvenating under-eye hollows and delicate periorbital tissue',
      'Pairing with microneedling for accelerated collagen induction',
    ],
    consultationInvolves: [
      'Clinical assessment of skin quality and discussion of target areas',
      'Health screening regarding hydration, blood counts, and medications',
      'Customized plan combining standalone PRP or microneedling synergy',
    ],
    whatToExpect: [
      'A small sample of blood is drawn in-clinic and centrifuged using sterile protocols.',
      'The concentrated platelet-rich plasma is harvested and applied to targeted treatment zones.',
      'Aftercare guidance is provided for optimal tissue healing.',
    ],
    generalRecovery: [
      'Mild swelling, temporary redness, or slight bruising at injection sites resolves in 1–3 days.',
      'Avoid anti-inflammatory medications for a few days to maximize natural healing cascade.',
    ],
    risksAndLimitations: [
      'Minimal risk of adverse reactions since PRP uses your own biological material.',
      'Mild tenderness or bruising may occur at the blood-draw or injection site.',
    ],
    suitabilityConsiderations: [
      'Not suitable for individuals with severe anemia, blood clotting disorders, or active infections.',
    ],
    faqs: [
      {
        question: 'Why is a blood draw required for PRP?',
        answer:
          'PRP uses your own blood to harvest pure, concentrated platelets and growth factors, ensuring 100% biocompatibility without synthetic chemicals.',
      },
    ],
    image: {
      src: '/images/treatments/prp.jpg',
      alt: 'Autologous platelet-rich plasma prepared for regenerative skin therapy',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    demoImage: {
      src: '/images/treatments/prp.jpg',
      alt: 'Editorial beauty close-up with glass serum dropper representing regenerative PRP skincare',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'microneedling',
    displayName: 'Microneedling',
    cardTitle: 'Microneedling',
    category: 'Skin & Regenerative',
    relatedOptions: ['Mechanical collagen induction', 'PRP synergy'],
    isFeatured: true,
    shortDescription:
      'Controlled micro-channel therapy designed to stimulate natural collagen, refine pores, and smooth skin texture.',
    fullIntroduction:
      'Microneedling creates controlled micro-channels in the skin using sterile single-use cartridges to activate your skin’s natural healing cascade. Treatment depth is tailored precisely to your skin profile to encourage collagen and elastin renewal.',
    potentialGoals: [
      'Improving skin texture, smoothness, and overall resilience',
      'Minimizing appearance of enlarged pores and mild acne scarring',
      'Enhancing absorption of active regenerative serums',
    ],
    consultationInvolves: [
      'Assessment of skin tone, sensitivity, and texture goals',
      'Review of current skincare routine (pausing retinoids/acids prior to treatment)',
      'Discussion of standalone microneedling versus PRP enhancement',
    ],
    whatToExpect: [
      'Topical numbing is applied for 20–30 minutes for comfortable treatment.',
      'The precision device is guided smoothly across treatment zones.',
      'Calming, hydrating barrier serum is applied immediately after.',
    ],
    generalRecovery: [
      'Skin looks flushed like a mild sunburn for 24–48 hours.',
      'Gentle hydration and daily mineral sunscreen are required during healing.',
    ],
    risksAndLimitations: [
      'Temporary redness, mild dryness, or pinpoint flaking.',
      'Series of 3–4 sessions spaced monthly is recommended for optimal structural remodeling.',
    ],
    suitabilityConsiderations: [
      'Contraindicated on active acne breakouts, open skin lesions, or active cold sores.',
    ],
    faqs: [
      {
        question: 'Can microneedling be paired with PRP?',
        answer:
          'Yes. Pairing microneedling with Platelet-Rich Plasma (PRP) significantly accelerates healing and boosts collagen synthesis for amplified results.',
      },
    ],
    image: {
      src: '/images/treatments/microneedling.jpg',
      alt: 'Gentle microneedling collagen induction therapy session',
      width: 1023,
      height: 683,
      objectPosition: '50% 45%',
    },
    demoImage: {
      src: '/images/treatments/microneedling.jpg',
      alt: 'Calm aesthetic facial treatment care in soft spa lighting',
      width: 1023,
      height: 683,
      objectPosition: '50% 45%',
    },
    publicationStatus: 'approved',
    clinicalReviewStatus: 'approved',
    reviewNote: 'Approved signature offering from Dani Skin Lab.',
  },
  {
    slug: 'biostimulators',
    displayName: 'Biostimulators — Sculptra / Radiesse',
    category: 'Injectables',
    relatedOptions: ['Sculptra', 'Radiesse'],
    isFeatured: false,
    shortDescription:
      'Gradual collagen and structural support consultations exploring biostimulatory options such as Sculptra and Radiesse.',
    fullIntroduction:
      'Collagen biostimulators—including poly-L-lactic acid (Sculptra) and calcium hydroxylapatite (Radiesse)—are injectable treatments intended to encourage the body’s own collagen response over time, supporting skin structure and gradual volume restoration.',
    potentialGoals: [
      'Gradual support for facial volume and skin firmness',
      'Addressing broader structural laxity where subtle, progressive change is preferred',
    ],
    consultationInvolves: [
      'Comparison between immediate-volume fillers and gradual biostimulatory options',
      'Review of medical history, autoimmune considerations, and realistic timelines',
      'Discussion of whether staged appointments may be recommended',
    ],
    whatToExpect: [
      'Product preparation, skin cleansing, and placement technique are tailored to the specific formulation.',
      'Your provider reviews any post-visit massage or care instructions specific to the product used.',
    ],
    generalRecovery: [
      'Mild swelling, tenderness, or bruising can occur at injection sites.',
      'Any product-specific post-care protocol (such as scheduled massage for certain formulations) is reviewed before discharge.',
    ],
    risksAndLimitations: [
      'Potential risks include bruising, swelling, asymmetry, nodule formation, infection, or rare vascular events.',
      'Unlike hyaluronic acid fillers, biostimulators are not immediately reversible with an enzyme.',
      'Gradual collagen responses vary from person to person and are not guaranteed.',
    ],
    suitabilityConsiderations: [
      'Not appropriate for all facial areas or for every client; an in-person clinical assessment is required.',
      'Individuals with a history of keloid scarring or specific medical conditions require careful evaluation.',
    ],
    faqs: [
      {
        question: 'How is a biostimulator different from traditional filler?',
        answer:
          'Traditional hyaluronic acid fillers primarily provide direct gel volume, whereas biostimulators are formulated to encourage gradual structural support over time. Your provider will explain which approach fits your goals.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/biostimulators.jpg',
      alt: 'Editorial side profile showing luminous, supported skin in soft natural light',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm Sculptra/Radiesse grouping and copy.',
  },
  {
    slug: 'hair-treatments',
    displayName: 'Hair Treatments',
    category: 'Scalp & Hair',
    relatedOptions: ['Scalp evaluation', 'Non-surgical hair & scalp support'],
    isFeatured: false,
    shortDescription:
      'Focused scalp consultations exploring non-surgical options for hair thinning, shedding, and follicle support.',
    fullIntroduction:
      'Non-surgical hair restoration consultations evaluate patterns of hair shedding or thinning and explore supportive scalp therapies tailored to your clinical profile.',
    potentialGoals: [
      'Evaluating patterns of hair thinning or decreased density',
      'Discussing non-surgical scalp support options and realistic expectations',
    ],
    consultationInvolves: [
      'Review of hair loss timeline, family history, nutrition, medications, and relevant medical factors',
      'Scalp examination to determine whether non-surgical aesthetic support is appropriate or whether medical workup is advised first',
    ],
    whatToExpect: [
      'The scalp is cleansed and prepared according to the chosen protocol.',
      'Post-visit scalp care and washing guidance are provided before leaving.',
    ],
    generalRecovery: [
      'Temporary scalp tenderness, mild redness, or fullness may occur briefly.',
      'Your provider will outline when normal hair care and styling products can resume.',
    ],
    risksAndLimitations: [
      'Non-surgical scalp treatments cannot regenerate hair in areas with complete, long-standing follicle loss.',
      'Outcomes vary widely based on underlying causes of hair thinning; no specific regrowth result is guaranteed.',
    ],
    suitabilityConsiderations: [
      'Underlying medical causes of hair loss (such as thyroid, iron, or autoimmune conditions) may require coordination with a primary physician or dermatologist.',
    ],
    faqs: [
      {
        question: 'Who is a good candidate for non-surgical hair treatments?',
        answer:
          'Suitability depends on the cause and stage of thinning. An in-person scalp evaluation helps determine whether supportive treatments are appropriate for you.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/hair-treatments.jpg',
      alt: 'Editorial close-up of thick healthy hair in warm sunlit window light',
      width: 960,
      height: 771,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm specific modalities offered.',
  },
  {
    slug: 'iv-therapy',
    displayName: 'IV Therapy',
    category: 'Wellness',
    isFeatured: false,
    shortDescription:
      'Clinician-screened intravenous hydration and wellness consultations tailored to individual health status.',
    fullIntroduction:
      'Intravenous (IV) therapy delivers fluids and selected micronutrients directly into the bloodstream under clinical supervision following medical screening.',
    potentialGoals: [
      'Supporting hydration when clinically appropriate',
      'Discussing clinician-reviewed micronutrient infusion options',
    ],
    consultationInvolves: [
      'Review of medical history, kidney/cardiac health, allergies, and current medications',
      'Confirmation that elective IV therapy is safe and appropriate for your health profile',
    ],
    whatToExpect: [
      'Vital signs and health screening are reviewed prior to starting.',
      'A small peripheral IV catheter is placed by a qualified clinician for the infusion.',
    ],
    generalRecovery: [
      'Minimal downtime for most clients; mild bruising or soreness at the IV site can occasionally occur.',
    ],
    risksAndLimitations: [
      'Risks include IV-site bruising, discomfort, infiltration, phlebitis, infection, or rare allergic reactions.',
      'Elective IV therapy is not a substitute for primary medical care, emergency treatment, or treatment of acute illness.',
    ],
    suitabilityConsiderations: [
      'Contraindicated in certain cardiac, renal, or fluid-balance conditions, or with known component allergies.',
    ],
    faqs: [
      {
        question: 'Is medical screening required before IV therapy?',
        answer:
          'Yes. Every client undergoes clinical screening before an infusion to ensure the formulation and volume are appropriate.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/iv-therapy.jpg',
      alt: 'Sunlit wellness alcove with bouclé chair and minimalist IV infusion stand beside an emerald marble side table',
      width: 1200,
      height: 896,
      objectPosition: '50% 45%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm menu availability and formulations.',
  },
];

export function isDraftPreviewEnabled(previewParam?: string): boolean {
  if (
    process.env.CONTENT_MODE?.trim().toLowerCase() === 'preview' ||
    process.env.ENABLE_DRAFT_PREVIEW === 'true'
  ) {
    return true;
  }
  return process.env.NODE_ENV !== 'production' && previewParam === 'drafts';
}

export function getApprovedTreatments(): Treatment[] {
  return treatmentsData.filter(
    (treatment) => treatment.publicationStatus === 'approved',
  );
}

export function getTreatmentsForView(includeDrafts: boolean): Treatment[] {
  if (includeDrafts) {
    return treatmentsData;
  }
  return getApprovedTreatments();
}

export function getFeaturedTreatmentsForView(includeDrafts: boolean): Treatment[] {
  const pool = getTreatmentsForView(includeDrafts);
  const featured = pool.filter((item) => item.isFeatured);
  return (featured.length > 0 ? featured : pool).slice(0, 6);
}

export function getTreatmentBySlug(
  slug: string,
  includeDrafts: boolean,
): Treatment | undefined {
  return treatmentsData.find(
    (treatment) =>
      treatment.slug === slug &&
      (treatment.publicationStatus === 'approved' || includeDrafts),
  );
}

export function getTreatmentDisplayImage(
  treatment: Treatment,
  isPreviewMode: boolean,
): { image: ApprovedImage; isDemo: boolean } | null {
  if (treatment.image) {
    return { image: treatment.image, isDemo: false };
  }
  if (isPreviewMode && treatment.demoImage) {
    return { image: treatment.demoImage, isDemo: true };
  }
  return null;
}
