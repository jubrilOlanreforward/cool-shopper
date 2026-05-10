import React from 'react';
import { styleVars } from './styleVars';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function IconButton({ icon, ariaLabel, size = 'md', className = '', ...props }: IconButtonProps) {
  const sizeClass = size === 'sm' ? 'p-1' : size === 'lg' ? 'p-3' : 'p-2';
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${styleVars.rounded} ${styleVars.transition} ${styleVars.active} hover:bg-surface-variant/50 ${sizeClass} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
