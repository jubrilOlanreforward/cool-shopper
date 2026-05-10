import React from 'react';
import { styleVars } from './styleVars';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-xs">
      {label && <label className="font-label-sm text-label-sm text-on-surface-variant mb-xs">{label}</label>}
      <input
        className={`w-full bg-surface-container-lowest border border-outline-variant/30 ${styleVars.rounded} py-sm px-md focus:outline-none focus:ring-2 focus:ring-primary-container ${styleVars.transition} ${className}`}
        {...props}
      />
      {error && <span className="text-error text-label-sm mt-xs">{error}</span>}
    </div>
  );
}
