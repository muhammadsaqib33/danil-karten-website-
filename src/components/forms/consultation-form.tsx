'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, type SelectOption } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import type {
  ConsultationApiResponse,
  ConsultationDeliveryMode,
  ConsultationFieldErrors,
  ConsultationSuccessResponse,
  PreferredContactMethod,
  PreferredContactTime,
} from '@/types/consultation';

interface ConsultationFormProps {
  deliveryMode: ConsultationDeliveryMode;
  treatmentOptions: SelectOption[];
}

function createSubmissionId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }
  return `req-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

const CONTACT_METHOD_OPTIONS: SelectOption[] = [
  { value: 'phone', label: 'Phone call' },
  { value: 'email', label: 'Email' },
  { value: 'either', label: 'Either phone or email' },
];

const CONTACT_TIME_OPTIONS: SelectOption[] = [
  { value: 'no_preference', label: 'No preference' },
  { value: 'morning', label: 'Morning (9 AM – 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM – 4 PM)' },
  { value: 'evening', label: 'Late afternoon / Early evening (4 PM – 6 PM)' },
];

export function ConsultationForm({
  deliveryMode,
  treatmentOptions,
}: ConsultationFormProps) {
  const [fullName, setFullName] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<PreferredContactMethod>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatmentInterest, setTreatmentInterest] = useState(
    treatmentOptions[0]?.value ?? 'general_consultation',
  );
  const [preferredContactTime, setPreferredContactTime] =
    useState<PreferredContactTime>('no_preference');
  const [contactAcknowledgement, setContactAcknowledgement] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [submissionId, setSubmissionId] = useState<string>(() =>
    createSubmissionId(),
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ConsultationFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successResult, setSuccessResult] =
    useState<ConsultationSuccessResponse | null>(null);

  const phoneRequired =
    preferredContactMethod === 'phone' || preferredContactMethod === 'either';
  const emailRequired =
    preferredContactMethod === 'email' || preferredContactMethod === 'either';

  function resetFormForNewRequest() {
    setFullName('');
    setPreferredContactMethod('phone');
    setPhone('');
    setEmail('');
    setTreatmentInterest(
      treatmentOptions[0]?.value ?? 'general_consultation',
    );
    setPreferredContactTime('no_preference');
    setContactAcknowledgement(false);
    setMarketingOptIn(false);
    setHoneypot('');
    setFieldErrors({});
    setFormError(null);
    setSuccessResult(null);
    setSubmissionId(createSubmissionId());
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});
    setFormError(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          preferredContactMethod,
          phone,
          email,
          treatmentInterest,
          preferredContactTime,
          contactAcknowledgement,
          marketingOptIn,
          website: honeypot,
          submissionId,
        }),
      });

      const data = (await response.json()) as ConsultationApiResponse;

      if (!response.ok || !data.ok) {
        if (!data.ok) {
          setFieldErrors(data.fieldErrors ?? {});
          setFormError(data.message);
        } else {
          setFormError(
            `We could not submit your request right now. Please call ${siteConfig.phoneDisplay}.`,
          );
        }
        return;
      }

      setSuccessResult(data);
    } catch {
      setFormError(
        `A network error prevented your request from being sent. Please try again or call ${siteConfig.phoneDisplay}.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (deliveryMode === 'unavailable') {
    return (
      <div className="rounded-lg border border-border bg-surface-card p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-medium text-ink">
          Request a consultation by phone
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Online consultation scheduling is not yet active. Please call{' '}
          {siteConfig.displayName} directly to speak with the practice and
          arrange your consultation.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#c9a15a] bg-gradient-to-r from-[#c9a15a] to-[#dcb877] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1b191f] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,161,90,0.35)] hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  if (successResult) {
    const isDemo = successResult.mode === 'demo';
    return (
      <div
        role="status"
        aria-live="polite"
        className={`rounded-lg border p-6 sm:p-8 ${
          isDemo
            ? 'border-warning-border bg-warning-bg'
            : 'border-[#c9a15a]/30 bg-white'
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4788f]">
          {isDemo ? 'Development / Demo Mode' : 'Request Received'}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium text-ink sm:text-3xl">
          {isDemo
            ? 'Validation succeeded (not delivered to live CRM)'
            : 'Consultation request submitted'}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/90 sm:text-base">
          {successResult.message}
        </p>
        <p className="mt-3 text-xs font-medium text-muted">
          Reference ID: {successResult.referenceId}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={successResult.fallbackPhone.href}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#c9a15a] bg-gradient-to-r from-[#c9a15a] to-[#dcb877] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1b191f] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,161,90,0.35)] hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call {successResult.fallbackPhone.display}</span>
          </a>
          <Button
            type="button"
            variant="secondary"
            onClick={resetFormForNewRequest}
          >
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="consultation-medical-notice"
      className="space-y-6 rounded-2xl border border-border bg-surface-card p-6 sm:p-8 shadow-xs"
    >
      <div
        id="consultation-medical-notice"
        role="note"
        className="space-y-1.5 rounded-md border border-border bg-surface/65 p-4 text-sm leading-relaxed text-ink"
      >
        {deliveryMode === 'demo' ? (
          <p className="font-medium text-ink">
            This preview form is not connected to live appointment scheduling.
            For an appointment, call{' '}
            <a
              href={siteConfig.phoneHref}
              className="underline underline-offset-4 hover:text-brand"
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        ) : null}
        <p className="text-sm text-muted">
          Please do not include medical information. Submitting a request does
          not confirm an appointment.
        </p>
      </div>

      {formError ? (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-error/40 bg-error-bg p-4 text-sm text-error"
        >
          <p className="font-medium">{formError}</p>
          <p className="mt-1.5 text-xs text-ink">
            Need immediate assistance? Call{' '}
            <a
              href={siteConfig.phoneHref}
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>
      ) : null}

      {/* Anti-spam honeypot field — invisible to users and assistive tech */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="consultation-website">Leave this field blank</label>
        <input
          id="consultation-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <Input
        id="consultation-full-name"
        name="fullName"
        type="text"
        label="Full name"
        requiredLabel
        required
        autoComplete="name"
        placeholder="Jane Doe"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={fieldErrors.fullName}
      />

      <Select
        id="consultation-contact-method"
        name="preferredContactMethod"
        label="Preferred contact method"
        requiredLabel
        required
        options={CONTACT_METHOD_OPTIONS}
        value={preferredContactMethod}
        onChange={(e) =>
          setPreferredContactMethod(e.target.value as PreferredContactMethod)
        }
        hint="We require only the contact details needed for your chosen follow-up method."
        error={fieldErrors.preferredContactMethod}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="consultation-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          label="Phone number"
          requiredLabel={phoneRequired}
          optionalLabel={!phoneRequired}
          required={phoneRequired}
          autoComplete="tel"
          placeholder="(917) 555-0199"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={fieldErrors.phone}
        />

        <Input
          id="consultation-email"
          name="email"
          type="email"
          inputMode="email"
          label="Email address"
          requiredLabel={emailRequired}
          optionalLabel={!emailRequired}
          required={emailRequired}
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={fieldErrors.email}
        />
      </div>

      <div className="space-y-5">
        <Select
          id="consultation-treatment-interest"
          name="treatmentInterest"
          label="Treatment interest"
          optionalLabel
          options={treatmentOptions}
          value={treatmentInterest}
          onChange={(e) => setTreatmentInterest(e.target.value)}
          error={fieldErrors.treatmentInterest}
        />

        <div>
          <Select
            id="consultation-contact-time"
            name="preferredContactTime"
            label="Preferred contact time"
            optionalLabel
            options={CONTACT_TIME_OPTIONS}
            value={preferredContactTime}
            onChange={(e) =>
              setPreferredContactTime(e.target.value as PreferredContactTime)
            }
            error={fieldErrors.preferredContactTime}
          />
          <p className="mt-1.5 text-xs text-muted">
            All time windows are in New York time.
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-border pt-5">
        <Checkbox
          id="consultation-acknowledgement"
          name="contactAcknowledgement"
          checked={contactAcknowledgement}
          onChange={(e) => setContactAcknowledgement(e.target.checked)}
          required
          error={fieldErrors.contactAcknowledgement}
          label={
            <span>
              I understand this is a consultation request, not a confirmed
              booking.{' '}
              <Link
                href="/privacy"
                className="font-normal text-brand underline underline-offset-4 hover:text-brand-hover"
              >
                Privacy Policy
              </Link>
              <span className="ml-1 text-error" aria-hidden="true">
                *
              </span>
            </span>
          }
        />

        <Checkbox
          id="consultation-marketing-opt-in"
          name="marketingOptIn"
          checked={marketingOptIn}
          onChange={(e) => setMarketingOptIn(e.target.checked)}
          error={fieldErrors.marketingOptIn}
          label="Optional: I would like to receive occasional practice updates from Dani E Esthetics."
          description="Marketing consent is completely optional and is not required to request a consultation."
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Submitting request…' : 'Book Now'}
        </Button>
      </div>
    </form>
  );
}
