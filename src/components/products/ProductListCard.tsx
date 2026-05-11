import React, { useState } from 'react';
import { styleVars } from '../common/styleVars';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';
import Link from 'next/link';

interface ProductListCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  onAddToCart?: () => void;
}

export default function ProductListCard({
  id,
  image,
  title,
  description,
  price,
  rating,
  onAddToCart,
}: ProductListCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart?.();
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className={`${styleVars.surfaceContainer} ${styleVars.rounded} overflow-hidden ${styleVars.shadow} hover:${styleVars.shadowHover} ${styleVars.transition} group flex flex-col h-full`}>
      <Link href={`/products/${id}`}>
        <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low cursor-pointer">
          <img
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
          />
          <button
            className={`absolute top-md right-md bg-white/80 backdrop-blur-sm p-xs rounded-full text-on-surface-variant hover:text-error ${styleVars.transition} ${styleVars.active}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </Link>

      <div className="p-md flex flex-col flex-1">
        <Link href={`/products/${id}`} className="hover:text-primary transition-colors">
          <div className="flex justify-between items-start mb-xs">
            <h4 className={`${styleVars.fontH3} text-on-surface text-lg`}>{title}</h4>
            <span className={`font-bold text-primary ${styleVars.fontH3} text-lg leading-none`}>{price}</span>
          </div>
        </Link>

        <p className="text-on-surface-variant text-body-md line-clamp-2 mb-md">{description}</p>

        <div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/10">
          <RatingStars rating={rating} className="scale-90 origin-left" />
          <Button
            variant="primary"
            className="!px-md !py-sm text-label-sm disabled:opacity-50"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}
