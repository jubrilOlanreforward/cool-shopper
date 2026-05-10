import React from 'react';
import { styleVars } from '../common/styleVars';

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
  id,
  image,
  title,
  description,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className={`${styleVars.surfaceContainer} ${styleVars.rounded} p-md flex flex-col sm:flex-row gap-md ${styleVars.shadow} border border-outline-variant/20 relative overflow-hidden group`}>
      <div className="w-full sm:w-32 h-48 sm:h-32 rounded-lg bg-surface-container overflow-hidden shrink-0">
        <img alt={title} src={image} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div className="pr-8 sm:pr-0">
          <h3 className={`${styleVars.fontH3} text-body-lg font-bold text-on-surface`}>{title}</h3>
          <p className="font-body-md text-label-sm text-on-surface-variant">{description}</p>
        </div>

        <div className="flex justify-between items-center sm:items-end mt-md sm:mt-0">
          <p className={`${styleVars.fontH3} text-body-lg font-bold text-primary`}>{price}</p>

          <div className="flex items-center bg-surface-container-high rounded-full px-xs py-xs">
            <button
              onClick={() => onQuantityChange?.(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-primary ${styleVars.active} ${styleVars.transition}"
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="px-sm font-bold text-on-surface">{quantity}</span>
            <button
              onClick={() => onQuantityChange?.(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-primary ${styleVars.active} ${styleVars.transition}"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="absolute top-md right-md text-outline hover:text-error ${styleVars.transition} ${styleVars.active}"
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
