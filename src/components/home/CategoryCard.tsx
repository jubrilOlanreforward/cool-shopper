import React from 'react';
import { styleVars } from '../common/styleVars';

interface CategoryCardProps {
  title: string;
  image: string;
  label?: string;
  featured?: boolean;
}

export default function CategoryCard({ title, image, label, featured }: CategoryCardProps) {
  return (
    <div
      className={`relative group overflow-hidden ${styleVars.rounded} bg-[#FAF9F6] ${styleVars.shadow} cursor-pointer ${
        featured ? 'col-span-8 row-span-2' : ''
      }`}
    >
      <img
        alt={title}
        src={image}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
          {label && <span className="text-white font-label-sm text-label-sm mb-xs uppercase tracking-widest">{label}</span>}
          <h2 className="text-white font-h2 text-h2 mb-md">{title}</h2>
          <button className="w-fit bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-bold hover:brightness-110 ${styleVars.active} ${styleVars.transition}">
            Explore Collection
          </button>
        </div>
      )}
      {!featured && (
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 ${styleVars.transition} flex items-center justify-center">
          <h3 className="text-white font-h3 text-h3">{title}</h3>
        </div>
      )}
    </div>
  );
}
