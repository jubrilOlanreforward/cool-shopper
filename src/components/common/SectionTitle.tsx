import React from 'react';
import { styleVars } from './styleVars';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-md ${className}`}>
      <h2 className={`${styleVars.fontH2} text-on-background`}>{title}</h2>
      {subtitle && <p className="text-on-surface-variant font-body-md mt-xs">{subtitle}</p>}
    </div>
  );
}
