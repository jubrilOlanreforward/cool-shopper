'use client';

import React from 'react';

interface ColorOption {
  name: string;
  bgClass: string;
  selected: boolean;
}

interface SizeOption {
  label: string;
  selected: boolean;
}

interface ProductOptionsProps {
  colors: ColorOption[];
  sizes: SizeOption[];
  selectedColorName?: string;
}

export default function ProductOptions({ colors, sizes, selectedColorName }: ProductOptionsProps) {
  return (
    <div className="space-y-sm py-md border-y border-outline-variant/20">
      {/* Color */}
      <div>
        <span className="font-bold text-on-surface block mb-xs">
          Color: <span className="font-normal text-on-surface-variant">{selectedColorName}</span>
        </span>
        <div className="flex gap-sm">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full ${color.bgClass} ${
                color.selected
                  ? 'ring-2 ring-offset-2 ring-primary'
                  : 'ring-1 ring-outline-variant'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <span className="font-bold text-on-surface block mb-xs">Size:</span>
        <div className="flex gap-sm">
          {sizes.map((size) => (
            <button
              key={size.label}
              className={`px-md py-xs rounded-lg transition-colors ${
                size.selected
                  ? 'border-2 border-primary text-primary font-bold'
                  : 'border border-outline-variant text-on-surface-variant hover:border-primary'
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
