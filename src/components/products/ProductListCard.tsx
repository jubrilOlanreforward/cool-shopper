import React from 'react';
import { styleVars } from '../common/styleVars';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';

interface ProductListCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  onAddToCart?: () => void;
}

export default function ProductListCard({
  image,
  title,
  description,
  price,
  rating,
  onAddToCart,
}: ProductListCardProps) {
  return (
    <div className={`${styleVars.surfaceContainer} ${styleVars.rounded} overflow-hidden ${styleVars.shadow} hover:${styleVars.shadowHover} ${styleVars.transition} group flex flex-col h-full`}>
      <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <button className={`absolute top-md right-md bg-white/80 backdrop-blur-sm p-xs rounded-full text-on-surface-variant hover:text-error ${styleVars.transition} ${styleVars.active}`}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      <div className="p-md flex flex-col flex-1">
        <div className="flex justify-between items-start mb-xs">
          <h4 className={`${styleVars.fontH3} text-on-surface text-lg`}>{title}</h4>
          <span className={`font-bold text-primary ${styleVars.fontH3} text-lg leading-none`}>{price}</span>
        </div>

        <p className="text-on-surface-variant text-body-md line-clamp-2 mb-md">{description}</p>

        <div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/10">
          <RatingStars rating={rating} className="scale-90 origin-left" />
          <Button variant="primary" className="!px-md !py-sm text-label-sm" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
