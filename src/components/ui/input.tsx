import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  requiredLabel?: boolean;
  optionalLabel?: boolean;
  hint?: string;
  error?: string;
}

export function Input({
  id,
  label,
  requiredLabel,
  optionalLabel,
  hint,
  error,
  className = '',
  ...props
}: InputProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink"
      >
        <span>{label}</span>
        {requiredLabel ? (
          <span className="ml-1 text-error" aria-hidden="true">
            *
          </span>
        ) : null}
        {optionalLabel ? (
          <span className="ml-1.5 font-normal text-muted">(Optional)</span>
        ) : null}
      </label>

      {hint ? (
        <p id={hintId} className="text-xs leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}

      <input
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={`block min-h-[46px] w-full rounded-md border bg-surface-card px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand ${
          error
            ? 'border-error bg-error-bg/40'
            : 'border-border hover:border-brand/50'
        } ${className}`.trim()}
        {...props}
      />

      {error ? (
        <p id={errorId} role="alert" className="text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
