import React from 'react';
import { styleVars } from '../common/styleVars';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  rating?: number;
}

export default function ProductCard({ image, category, title, price, rating = 4.5 }: ProductCardProps) {
  return (
    <div className={`bg-[#FAF9F6] ${styleVars.rounded} overflow-hidden ${styleVars.shadow} group cursor-pointer ${styleVars.transition} hover:-translate-y-1`}>
      <div className="aspect-square overflow-hidden bg-surface-container">
        <img
          alt={title}
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-md">
        <span className="text-on-surface-variant text-label-sm font-label-sm uppercase">{category}</span>
        <h4 className={`${styleVars.fontH3} text-body-lg font-semibold text-on-surface mt-xs group-hover:text-primary ${styleVars.transition}`}>
          {title}
        </h4>
        <p className={`text-primary font-bold mt-sm`}>{price}</p>
        {rating && <RatingStars rating={rating} className="mt-sm" />}
      </div>
    </div>
  );
}
