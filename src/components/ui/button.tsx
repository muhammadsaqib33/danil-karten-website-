import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'inverse'
  | 'secondaryInverse';
export type ButtonSize = 'md' | 'lg';

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
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-brand text-white hover:bg-brand-hover border border-brand focus-visible:outline-brand',
    secondary:
      'bg-transparent text-ink border border-brand/40 hover:border-brand hover:bg-brand/5 focus-visible:outline-brand',
    ghost:
      'bg-transparent text-ink hover:bg-surface border border-transparent focus-visible:outline-brand',
    inverse:
      'bg-ivory text-emerald-deep hover:bg-rose-soft border border-ivory focus-visible:outline-champagne-light',
    secondaryInverse:
      'bg-transparent text-ivory border border-ivory/40 hover:border-ivory hover:bg-white/10 focus-visible:outline-champagne-light',
  };

  const sizes: Record<ButtonSize, string> = {
    md: 'min-h-[44px] px-5 py-2.5 text-sm sm:text-[15px]',
    lg: 'min-h-[48px] px-6 py-3 text-base',
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
