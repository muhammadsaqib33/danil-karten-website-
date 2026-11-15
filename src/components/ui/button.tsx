import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'inverse'
  | 'secondaryInverse'
  | 'champagne';
export type ButtonSize = 'sm' | 'md' | 'lg';

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap active:scale-[0.99]';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-brand text-white border border-brand/90 hover:bg-brand-hover hover:border-brand-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(30,94,78,0.22)] focus-visible:outline-brand',
    secondary:
      'bg-transparent text-ink border border-border hover:border-brand hover:text-brand hover:bg-brand/5 hover:-translate-y-0.5 focus-visible:outline-brand',
    ghost:
      'bg-transparent text-ink hover:bg-surface border border-transparent hover:-translate-y-0.5 focus-visible:outline-brand',
    inverse:
      'bg-ivory text-emerald-deep border border-ivory hover:bg-white hover:text-brand hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] focus-visible:outline-champagne-light',
    secondaryInverse:
      'bg-transparent text-ivory border border-white/35 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-champagne-light',
    champagne:
      'bg-champagne text-white border border-champagne hover:bg-champagne-hover hover:border-champagne-hover hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(197,164,126,0.3)] focus-visible:outline-champagne',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'min-h-[38px] px-4 py-1.5 text-xs sm:text-sm tracking-wide',
    md: 'min-h-[44px] px-6 py-2.5 text-sm sm:text-[15px] tracking-wide',
    lg: 'min-h-[48px] px-7 py-3 text-sm sm:text-base tracking-wide',
  };

  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
