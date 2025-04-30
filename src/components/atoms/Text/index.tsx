import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'heading' | 'subheading';
  className?: string;
}

const variantStyles = {
  body: 'text-base text-gray-700',
  heading: 'text-3xl font-bold text-gray-900',
  subheading: 'text-xl font-semibold text-gray-800',
};

export const Text = ({ children, variant = 'body', className = '' }: TextProps) => {
  return <span className={`${variantStyles[variant]} ${className}`}>{children}</span>;
}; 