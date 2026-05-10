import React from 'react';
import { styleVars } from '../common/styleVars';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="md:col-span-7 space-y-md">
      <div className={`bg-[#FAF9F6] ${styleVars.rounded} overflow-hidden ${styleVars.shadow} aspect-[4/5]`}>
        <img
          alt={productName}
          src={images[activeIndex]}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-sm overflow-x-auto pb-xs">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-24 h-24 ${styleVars.rounded} overflow-hidden flex-shrink-0 transition-all ${
              idx === activeIndex
                ? `border-2 border-primary`
                : `border border-outline-variant/30 hover:border-primary ${styleVars.transition}`
            }`}
          >
            <img alt="Thumbnail" src={img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
