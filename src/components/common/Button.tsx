import React from 'react';
import { styleVars } from './styleVars';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  let base = `${styleVars.rounded} ${styleVars.fontLabel} px-md py-sm ${styleVars.transition} ${styleVars.active}`;
  if (variant === 'primary') base += ` ${styleVars.primaryBg} text-on-primary`;
  else if (variant === 'secondary') base += ` ${styleVars.secondaryBg} text-on-secondary`;
  else if (variant === 'outline') base += ` border ${styleVars.outline} text-primary bg-transparent`;
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
