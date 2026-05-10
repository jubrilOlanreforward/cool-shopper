import React from 'react';
import { styleVars } from '../common/styleVars';

interface ProductOption {
  name: string;
  values: string[];
  selected: string;
}

interface ProductOptionsProps {
  options: ProductOption[];
  onOptionChange?: (optionName: string, value: string) => void;
}

export default function ProductOptions({ options, onOptionChange }: ProductOptionsProps) {
  return (
    <div className="space-y-sm py-md border-y border-outline-variant/20">
      {options.map((option) => (
        <div key={option.name}>
          <span className="font-bold text-on-surface block mb-xs">
            {option.name}: <span className="font-normal text-on-surface-variant">{option.selected}</span>
          </span>
          <div className="flex gap-sm flex-wrap">
            {option.values.map((value) => (
              <button
                key={value}
                onClick={() => onOptionChange?.(option.name, value)}
                className={`px-md py-xs border-2 rounded-lg font-bold ${styleVars.transition} ${
                  value === option.selected
                    ? 'border-primary text-primary'
                    : 'border-outline-variant text-on-surface-variant hover:border-primary'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
