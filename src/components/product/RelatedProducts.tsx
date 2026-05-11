'use client';

import React from 'react';

interface RelatedProduct {
  image: string;
  title: string;
  price: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-xl">
      <div className="flex justify-between items-end mb-lg">
        <h3 className="font-h2 text-h2 text-on-surface">Complete the Look</h3>
        <a
          className="text-primary font-bold border-b-2 border-primary hover:text-on-primary-container hover:border-on-primary-container transition-colors"
          href="#"
        >
          View All Collection
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
        {products.map((product) => (
          <div key={product.title} className="bg-[#FAF9F6] rounded-xl shadow-sm overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={product.image}
              />
            </div>
            <div className="p-md space-y-xs">
              <p className="text-on-surface font-h3 text-[18px]">{product.title}</p>
              <p className="text-on-surface-variant font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
