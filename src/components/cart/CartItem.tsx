'use client';

import React from 'react';

interface CartItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
}

export default function CartItem({
  image,
  title,
  description,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-md flex flex-col sm:flex-row gap-md shadow-sm border border-outline-variant/20">
      <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-surface-container">
        <img alt={title} className="w-full h-full object-cover" src={image} />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">{title}</h3>
            <p className="text-on-surface-variant">{description}</p>
          </div>
          <span className="font-bold text-body-lg text-primary">{price}</span>
        </div>
        <div className="flex justify-between items-end mt-md">
          <div className="flex items-center gap-sm bg-surface-container-low px-sm py-xs rounded-full border border-outline-variant/30">
            <button
              className="material-symbols-outlined text-on-surface-variant active:scale-95 transition-transform"
              onClick={() => onQuantityChange?.(Math.max(1, quantity - 1))}
            >
              remove
            </button>
            <span className="font-semibold px-md">{quantity}</span>
            <button
              className="material-symbols-outlined text-on-surface-variant active:scale-95 transition-transform"
              onClick={() => onQuantityChange?.(quantity + 1)}
            >
              add
            </button>
          </div>
          <button
            className="text-error font-label-sm flex items-center gap-xs hover:underline"
            onClick={onRemove}
          >
            <span className="material-symbols-outlined text-[18px]">delete</span>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
