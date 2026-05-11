'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addToCart } from '../../store/cartSlice';
import ProductListCard from './ProductListCard';
import Skeleton from '../common/Skeleton';

interface ProductListGridImplProps {
  loading?: boolean;
}

export default function ProductListGridImpl({ loading = false }: ProductListGridImplProps) {
  const dispatch = useAppDispatch();
  const { items: products } = useAppSelector((state) => state.products);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
      {products.map((product) => (
        <ProductListCard
          key={product.id}
          id={product.id}
          image={product.thumbnail || product.images?.[0] || ''}
          title={product.title}
          description={product.description}
          price={`$${product.price.toFixed(2)}`}
          rating={product.rating}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}
   