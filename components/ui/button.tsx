import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
};

const base = 'inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium transition';
const variants = {
  primary: 'border-[#C9A96E] bg-[#C9A96E] text-black hover:bg-[#d7ba87]',
  secondary: 'border-[#1A1A1A] bg-[#111111] text-white hover:border-[#C9A96E] hover:text-[#C9A96E]',
};

export function Button({ children, href, type = 'button', variant = 'primary', className = '' }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} className={classes}>{children}</button>;
}
