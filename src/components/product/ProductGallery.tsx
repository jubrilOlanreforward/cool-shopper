'use client';

import React from 'react';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="md:col-span-7 space-y-md">
      <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
        <img
          alt={alt}
          src={images[activeIndex]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-sm">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-24 h-24 bg-[#FAF9F6] rounded-lg overflow-hidden cursor-pointer transition-colors ${
              idx === activeIndex
                ? 'border-2 border-primary'
                : 'border border-outline-variant/30 hover:border-primary'
            }`}
          >
            <img alt={`${alt} Detail ${idx + 1}`} src={img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
