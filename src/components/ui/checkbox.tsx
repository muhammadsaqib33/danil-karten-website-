import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: ReactNode;
  description?: string;
  error?: string;
}

export function Checkbox({
  id,
  label,
  description,
  error,
  className = '',
  ...props
}: CheckboxProps) {
  const descId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="space-y-1.5">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          className={`mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-border accent-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`.trim()}
          {...props}
        />
        <div className="space-y-1 text-sm leading-relaxed">
          <label htmlFor={id} className="cursor-pointer font-medium text-ink">
            {label}
          </label>
          {description ? (
            <p id={descId} className="text-xs leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {error ? (
        <p id={errorId} role="alert" className="pl-8 text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
