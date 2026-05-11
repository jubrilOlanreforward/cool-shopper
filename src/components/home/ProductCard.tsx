'use client';

import React from 'react';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, category, title, price }: ProductCardProps) {
  return (
    <div className="bg-[#FAF9F6] rounded-xl overflow-hidden soft-elevation group cursor-pointer transition-all hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-surface-container">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
        />
      </div>
      <div className="p-md">
        <span className="text-on-surface-variant text-label-sm font-label-sm uppercase">{category}</span>
        <h4 className="font-h3 text-body-lg font-semibold text-on-surface mt-xs group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-primary font-bold mt-sm">{price}</p>
      </div>
    </div>
  );
}
