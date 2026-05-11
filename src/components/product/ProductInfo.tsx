import React from 'react';

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
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      <div className="space-y-xs">
        <p className="text-primary font-label-sm text-label-sm uppercase tracking-widest">{category}</p>
        <h2 className="font-h1 text-h1 text-on-surface">{title}</h2>
        <p className="text-h3 font-h3 font-bold text-on-surface">{price}</p>
      </div>

      <div className="flex items-center gap-xs text-tertiary">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            star
          </span>
        ))}
        <span className="text-on-surface-variant text-body-md ml-base">({reviewCount} reviews)</span>
      </div>

      <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
        {description}
      </p>
    </>
  );
}
