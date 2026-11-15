import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'solidGold'
  | 'outlineWhite'
  | 'outlineDark'
  | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

export function buttonClasses({
  variant = 'solidGold',
  size = 'md',
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap active:scale-[0.98] cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-[#c9a15a] to-[#dcb877] text-[#1b191f] font-semibold border border-[#c9a15a] hover:shadow-[0_12px_36px_rgba(201,161,90,0.45)] hover:-translate-y-0.5 hover:from-[#d8b26c] hover:to-[#e6c88e] focus-visible:outline-[#c9a15a]',
    solidGold:
      'bg-gradient-to-r from-[#c9a15a] to-[#dcb877] text-[#1b191f] font-semibold border border-[#c9a15a] hover:shadow-[0_12px_36px_rgba(201,161,90,0.45)] hover:-translate-y-0.5 hover:from-[#d8b26c] hover:to-[#e6c88e] focus-visible:outline-[#c9a15a]',
    secondary:
      'bg-white text-[#1b191f] font-semibold border border-[#c8bcb4] hover:border-[#b88d44] hover:text-[#b88d44] hover:bg-[#faf4ee] hover:shadow-xs hover:-translate-y-0.5 focus-visible:outline-[#c9a15a]',
    outlineDark:
      'bg-white text-[#1b191f] font-semibold border border-[#c8bcb4] hover:border-[#b88d44] hover:text-[#b88d44] hover:bg-[#faf4ee] hover:shadow-xs hover:-translate-y-0.5 focus-visible:outline-[#c9a15a]',
    outlineWhite:
      'bg-[#1b191f]/75 backdrop-blur-md text-white font-semibold border border-white/70 hover:bg-white hover:text-[#1b191f] hover:border-white hover:-translate-y-0.5 focus-visible:outline-white shadow-[0_4px_16px_rgba(0,0,0,0.3)]',
    ghost:
      'bg-transparent text-[#2e2c31] hover:bg-[#faf4ee] border border-transparent hover:-translate-y-0.5 focus-visible:outline-[#c9a15a]',
    inverse:
      'bg-white text-[#1b191f] border border-white hover:bg-[#faf4ee] hover:text-[#c9a15a] hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-white',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'min-h-[38px] px-5 py-2 text-[11px]',
    md: 'min-h-[44px] px-7 py-2.5 text-[12px]',
    lg: 'min-h-[50px] px-8 py-3.5 text-[12.5px]',
  };

  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = 'solidGold',
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
