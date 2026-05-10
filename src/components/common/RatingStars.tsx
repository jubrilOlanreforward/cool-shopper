import React from 'react';

interface RatingStarsProps {
  rating: number;
  outOf?: number;
  className?: string;
}

export default function RatingStars({ rating, outOf = 5, className = '' }: RatingStarsProps) {
  return (
    <div className={`flex items-center gap-xs text-tertiary ${className}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${i < Math.floor(rating) ? 1 : 0}` }}
        >
          star
        </span>
      ))}
    </div>
  );
}
