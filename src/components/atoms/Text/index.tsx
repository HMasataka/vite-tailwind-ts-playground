import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'heading' | 'subheading';
}

const variantStyles = {
  body: 'text-base text-gray-700',
  heading: 'text-3xl font-bold text-gray-900',
  subheading: 'text-xl font-semibold text-gray-800',
};

export const Text = ({ children, variant = 'body' }: TextProps) => {
  return <span className={`${variantStyles[variant]}`}>{children}</span>;
}; 