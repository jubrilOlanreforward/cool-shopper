'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProducts } from '@/store/productsSlice';
import { addToCart } from '@/store/cartSlice';
import Skeleton from '@/components/common/Skeleton';
import type { Product } from '@/types/product';

export default function NewArrivalsSection() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 4, skip: 0 }));
  }, [dispatch]);

  const arrivals = items.slice(0, 4);

  return (
    <section className="mb-xl">
      <div className="flex justify-between items-end mb-md">
        <div>
          <h2 className="font-h2 text-h2 text-on-background">New Arrivals</h2>
          <p className="text-on-surface-variant font-body-md mt-xs">The latest additions to our serene collection.</p>
        </div>
        <Link
          className="text-primary font-bold font-label-sm border-b-2 border-primary pb-1 hover:text-primary-container hover:border-primary-container transition-all"
          href="/products"
        >
          View All
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <Skeleton className="aspect-square w-full rounded-none" />
              <div className="p-md space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {arrivals.map((product: Product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.title}
                  src={product.thumbnail}
                />
              </div>
              <div className="p-md">
                <p className="text-primary font-label-sm text-label-sm uppercase tracking-wider mb-xs">
                  {product.category}
                </p>
                <h3 className="font-h3 text-body-md font-bold text-on-surface line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-primary font-bold mt-xs">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
