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
    displayName: 'Neuromodulators',
    cardTitle: 'Botox & Dysport',
    category: 'Injectables',
    relatedOptions: ['Botox', 'Dysport'],
    isFeatured: true,
    shortDescription:
      'Targeted neuromodulator consultations to soften dynamic expression lines while preserving natural facial movement.',
    fullIntroduction:
      'Neuromodulator treatments use purified botulinum toxin formulations—such as Botox or Dysport—to temporarily relax targeted facial muscles involved in repetitive expression lines. Product selection and dosing are individualized following an in-person clinical evaluation.',
    potentialGoals: [
      'Softening the appearance of dynamic forehead, frown, or crow’s-feet lines',
      'Addressing muscle-driven facial tension or asymmetry when clinically appropriate',
      'Maintaining natural facial expression through conservative dosing',
    ],
    consultationInvolves: [
      'Review of your aesthetic priorities and facial muscle movement at rest and in animation',
      'Discussion of relevant medical history, medications, allergies, and prior neuromodulator experiences',
      'Evaluation of formulation options (such as Botox or Dysport) and expected limitations',
    ],
    whatToExpect: [
      'Your provider maps targeted muscle groups and cleanses the treatment area.',
      'Small, precise injections are placed using fine needles according to the agreed plan.',
      'Written aftercare instructions are reviewed before you leave.',
    ],
    generalRecovery: [
      'Mild localized redness, swelling, or small bumps at injection sites may occur briefly.',
      'Your provider will share guidance on activity, positioning, and avoiding rubbing the treated areas.',
      'Response develops gradually rather than immediately; follow-up timing is discussed during your visit.',
    ],
    risksAndLimitations: [
      'Potential side effects include temporary bruising, tenderness, headache, or unintended muscle relaxation such as eyelid or brow heaviness.',
      'Neuromodulators address muscle-driven expression lines rather than static skin texture or volume loss.',
      'Effects are temporary and vary between individuals; no specific outcome or duration is guaranteed.',
    ],
    suitabilityConsiderations: [
      'Candidacy is determined individually during an in-person clinical assessment.',
      'Not appropriate during pregnancy or breastfeeding, or for individuals with certain neuromuscular conditions or known ingredient sensitivities.',
    ],
    faqs: [
      {
        question: 'How do Botox and Dysport differ?',
        answer:
          'Both are FDA-approved neuromodulator formulations with distinct dosing units and diffusion characteristics. Your provider will discuss which option aligns best with your anatomy and goals during consultation.',
      },
      {
        question: 'Will my facial expression look stiff?',
        answer:
          'Treatment plans are tailored conservatively to match your desired level of movement. Specific placement and dosing are agreed upon together before treatment.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/neuromodulators.jpg',
      alt: 'Clinician in tailored dark emerald attire reviewing facial symmetry with a consultation patient in soft daylight',
      width: 1200,
      height: 896,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm public menu inclusion and clinical copy.',
  },
  {
    slug: 'dermal-fillers',
    displayName: 'Dermal Fillers',
    category: 'Injectables',
    relatedOptions: ['Hyaluronic acid dermal fillers'],
    isFeatured: true,
    shortDescription:
      'Individualized facial balancing and volume restoration tailored to facial proportion and structural harmony.',
    fullIntroduction:
      'Dermal fillers are injectable gel treatments—commonly formulated with hyaluronic acid—designed to support facial contours, restore age-related volume changes, or refine specific features. Each plan is guided by anatomical assessment and conservative proportion.',
    potentialGoals: [
      'Supporting midface, lip, chin, or jawline structure when clinically appropriate',
      'Softening selected static folds or hollows',
      'Achieving balanced facial harmony without overcorrection',
    ],
    consultationInvolves: [
      'Comprehensive facial proportion assessment and discussion of your primary concerns',
      'Health screening for contraindications, dental/surgical timing, and prior filler history',
      'Review of alternative approaches and realistic expectations for product behavior',
    ],
    whatToExpect: [
      'The treatment area is cleansed and comfort options are discussed prior to placement.',
      'Filler is placed carefully in targeted tissue planes according to the agreed plan.',
      'Immediate post-treatment appearance may include temporary swelling before settling.',
    ],
    generalRecovery: [
      'Temporary swelling, tenderness, or bruising is common and varies by treatment area.',
      'Aftercare guidance covers gentle care, activity modifications, and signs that warrant contacting the clinic.',
    ],
    risksAndLimitations: [
      'Risks include bruising, swelling, asymmetry, palpable lumps, delayed inflammatory reactions, infection, or rare vascular compromise requiring prompt clinical management.',
      'Filler does not replace surgical lifting when significant skin laxity is present.',
    ],
    suitabilityConsiderations: [
      'Requires in-person evaluation of tissue quality, vascular anatomy, and medical history.',
      'May be deferred in the presence of active skin infection, certain medical conditions, or upcoming procedures.',
    ],
    faqs: [
      {
        question: 'Can dermal fillers be adjusted or dissolved?',
        answer:
          'Hyaluronic acid fillers can be evaluated and, when clinically indicated, addressed with hyaluronidase. Suitability and risks are discussed during consultation.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/dermal-fillers.jpg',
      alt: 'Three-quarter editorial beauty profile highlighting balanced cheek and lip contour',
      width: 1200,
      height: 896,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm public menu inclusion and clinical copy.',
  },
  {
    slug: 'biostimulators',
    displayName: 'Biostimulators — Sculptra / Radiesse',
    category: 'Injectables',
    relatedOptions: ['Sculptra', 'Radiesse'],
    isFeatured: true,
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
    slug: 'microneedling',
    displayName: 'Microneedling',
    category: 'Skin & Regenerative',
    relatedOptions: ['Mechanical collagen induction', 'Optional PRP pairing'],
    isFeatured: true,
    shortDescription:
      'Skin texture, pore, and tone consultations utilizing controlled mechanical micro-channels to support dermal renewal.',
    fullIntroduction:
      'Microneedling creates controlled micro-channels in the skin using sterile, single-use cartridges to support natural dermal remodeling. Treatment depth and pass planning are customized to your skin type, tone, and recovery preferences.',
    potentialGoals: [
      'Supporting smoother skin texture and refined pore appearance',
      'Addressing mild acne scarring or uneven tone when clinically appropriate',
      'Encouraging overall skin vitality alongside tailored home care',
    ],
    consultationInvolves: [
      'Assessment of skin type, tone, scarring pattern, and pigmentation tendencies',
      'Review of medications (such as retinoids or blood thinners) and recent sun exposure',
      'Discussion of standalone microneedling versus pairing with autologous PRP',
    ],
    whatToExpect: [
      'Topical numbing is discussed and applied as appropriate prior to the session.',
      'Controlled passes are performed evenly across targeted facial or neck zones.',
      'Soothing post-procedure barrier care and sun-protection instructions are reviewed.',
    ],
    generalRecovery: [
      'Temporary redness, warmth, and mild tightness—often comparable to a mild sunburn—commonly occur initially.',
      'Strict sun protection and gentle, non-irritating skincare are emphasized during recovery.',
    ],
    risksAndLimitations: [
      'Potential risks include temporary erythema, swelling, dryness, pinpoint bruising, infection, or post-inflammatory pigment changes, especially without proper sun protection.',
      'Individual skin response varies; staged sessions may be discussed depending on your goals.',
    ],
    suitabilityConsiderations: [
      'Deferred if active acne flares, skin infections, cold sores, or certain healing disorders are present.',
      'Requires individualized depth settings for deeper skin tones to minimize pigment risk.',
    ],
    faqs: [
      {
        question: 'Can microneedling be paired with PRP?',
        answer:
          'Yes. During your consultation, Danielle will review whether standalone microneedling or pairing with platelet-rich plasma (PRP) aligns best with your goals.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/microneedling.jpg',
      alt: 'Calm aesthetic facial treatment care in soft spa lighting',
      width: 1023,
      height: 683,
      objectPosition: '50% 45%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm Microneedling clinical details.',
  },
  {
    slug: 'prp',
    displayName: 'PRP',
    cardTitle: 'PRP',
    category: 'Skin & Regenerative',
    relatedOptions: ['Platelet-Rich Plasma (PRP)', 'Topical & targeted regenerative applications'],
    isFeatured: true,
    shortDescription:
      'Autologous platelet-rich plasma consultations designed to support skin quality, under-eye vitality, or scalp care.',
    fullIntroduction:
      'Platelet-Rich Plasma (PRP) utilizes concentrated growth-factor-rich plasma prepared from a small sample of your own blood. Following individualized screening, PRP may be incorporated into facial skin revitalization or targeted supportive protocols.',
    potentialGoals: [
      'Supporting skin radiance, tone, and delicate tissue quality',
      'Complementing microneedling for enhanced dermal renewal',
      'Exploring non-synthetic, autologous regenerative options',
    ],
    consultationInvolves: [
      'Review of medical history, blood-count considerations, hydration, and current medications',
      'Evaluation of facial or scalp areas of concern and realistic response timelines',
      'Discussion of whether PRP is recommended alone or alongside microneedling',
    ],
    whatToExpect: [
      'A small peripheral blood sample is drawn in-clinic and processed using sterile centrifugation.',
      'The prepared plasma is applied or placed according to your agreed treatment plan.',
      'Written aftercare instructions outline gentle cleansing and skincare pauses.',
    ],
    generalRecovery: [
      'Mild localized swelling, redness, or temporary tenderness may occur depending on application method.',
      'Avoiding anti-inflammatory medications when clinically advised and following gentle skincare guidance support recovery.',
    ],
    risksAndLimitations: [
      'Risks include bruising at the blood draw or treatment site, temporary swelling, tenderness, infection, or variable clinical response.',
      'Autologous regenerative responses depend on individual biology and are not guaranteed.',
    ],
    suitabilityConsiderations: [
      'Not appropriate for individuals with certain blood disorders, active infections, or specific anticoagulant regimens.',
    ],
    faqs: [
      {
        question: 'Why is a blood draw required for PRP?',
        answer:
          'PRP uses components isolated directly from your own blood sample, without synthetic fillers. Your provider reviews health suitability and hydration beforehand.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/prp.jpg',
      alt: 'Editorial beauty close-up with glass serum dropper representing regenerative PRP skincare',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Candidate service — confirm standalone PRP applications offered.',
  },
  {
    slug: 'hair-treatments',
    displayName: 'Hair Treatments',
    category: 'Scalp & Hair',
    relatedOptions: ['Scalp evaluation', 'Non-surgical hair & scalp support'],
    isFeatured: true,
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
  {
    slug: 'chemical-peels',
    displayName: 'Chemical Peels',
    category: 'Skin Resurfacing',
    isFeatured: false,
    shortDescription:
      'Prospective exfoliating peel consultations to discuss skin brightness, texture, and pigment support.',
    fullIntroduction:
      'Chemical peels use carefully selected acid solutions to exfoliate damaged outer skin layers and encourage refreshed skin turnover. Peel depth and formulation are selected based on skin type, sensitivity, and recovery preferences.',
    potentialGoals: [
      'Supporting brighter, more even-looking skin tone',
      'Addressing mild surface dullness, sun-related pigment, or congestion',
    ],
    consultationInvolves: [
      'Evaluation of skin sensitivity, Fitzpatrick skin type, and recent skincare or procedure history',
      'Discussion of light versus deeper exfoliation options and sun-protection readiness',
    ],
    whatToExpect: [
      'The skin is cleansed and degreased before the selected peel solution is applied evenly.',
      'Neutralization or timed removal is followed by soothing barrier care and sunscreen.',
    ],
    generalRecovery: [
      'Temporary redness, tightness, dryness, or visible flaking/peeling may occur depending on peel strength.',
      'Diligent sun avoidance and gentle skincare are essential throughout healing.',
    ],
    risksAndLimitations: [
      'Risks include prolonged redness, irritation, peeling variability, cold-sore reactivation, or unwanted pigment changes if sun protection or pre-care guidance is not followed.',
    ],
    suitabilityConsiderations: [
      'Requires careful screening for recent isotretinoin use, active skin irritation, pregnancy/breastfeeding restrictions on certain acids, and upcoming sun exposure.',
    ],
    faqs: [
      {
        question: 'Will my skin visibly peel after every chemical peel?',
        answer:
          'Not always. Exfoliation can range from subtle microscopic shedding to visible flaking depending on the specific formulation and your skin’s condition.',
      },
    ],
    image: undefined,
    demoImage: {
      src: '/images/treatments/chemical-peels.jpg',
      alt: 'Close-up editorial portrait highlighting clear luminous skin in morning light',
      width: 960,
      height: 640,
      objectPosition: '50% 25%',
    },
    publicationStatus: 'draft',
    clinicalReviewStatus: 'pending_review',
    reviewNote: 'Future consent category candidate — confirm if offered at launch.',
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
