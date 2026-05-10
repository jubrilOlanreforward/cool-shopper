import React from 'react';
import { styleVars } from '../common/styleVars';
import RatingStars from '../common/RatingStars';

interface ProductInfoProps {
  category: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  description: string;
}

export default function ProductInfo({
  category,
  title,
  price,
  rating,
  reviewCount,
  description,
}: ProductInfoProps) {
  return (
    <div className="md:col-span-5 space-y-md">
      <div className="space-y-xs">
        <p className="text-primary font-label-sm text-label-sm uppercase tracking-widest">{category}</p>
        <h2 className={`${styleVars.fontH1} text-on-surface`}>{title}</h2>
        <p className={`${styleVars.fontH3} font-bold text-on-surface`}>{price}</p>
      </div>

      <div className="flex items-center gap-xs">
        <RatingStars rating={rating} />
        <span className="text-on-surface-variant text-body-md ml-base">({reviewCount} reviews)</span>
      </div>

      <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">{description}</p>
    </div>
  );
}
