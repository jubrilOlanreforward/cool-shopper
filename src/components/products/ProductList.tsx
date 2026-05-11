'use client';

import React from 'react';
import ProductListFilters from './ProductListFilters';
import ProductListGridImpl from './ProductListGridImpl';
import Pagination from './Pagination';

export default function ProductList() {
  return (
    <div className="flex flex-col md:flex-row gap-lg">
      {/* Sidebar Filters */}
      <ProductListFilters />

      {/* Product Grid Section */}
      <section className="flex-1">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <p className="text-on-surface-variant font-body-md mb-xs">Showing 1–12 of 48 results</p>
            <h2 className="font-h2 text-h2 text-on-background">The Essentials</h2>
          </div>
          <div className="flex items-center gap-sm">
            <span className="font-label-sm text-label-sm text-outline">Sort by</span>
            <select className="bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        <ProductListGridImpl />

        {/* Pagination */}
        <div className="mt-xl">
          <Pagination />
        </div>
      </section>
    </div>
  );
}
