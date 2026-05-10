import React from 'react';
import { styleVars } from '../common/styleVars';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../home/ProductCard';

interface RelatedProduct {
  image: string;
  category: string;
  title: string;
  price: string;
  rating: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-xl">
      <div className="flex justify-between items-end mb-lg">
        <SectionTitle title="Complete the Look" />
        <a href="/products" className="text-primary font-bold border-b-2 border-primary hover:text-primary-container hover:border-primary-container ${styleVars.transition}">
          View All Collection
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
