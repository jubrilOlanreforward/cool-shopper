'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchProducts } from '../../store/productsSlice';
import ProductListFilters from './ProductListFilters';
import ProductListGridImpl from './ProductListGridImpl';
import Pagination from './Pagination';
import ErrorBanner from '../common/ErrorBanner';

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { skip, limit, loading, error, total } = useAppSelector((state) => state.products);

  // Fetch products on mount and when pagination changes
  useEffect(() => {
    dispatch(fetchProducts({ limit, skip }));
  }, [dispatch, skip, limit]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let sortBy = '';
    let sortOrder: 'asc' | 'desc' = 'asc';

    switch (value) {
      case 'Price: Low to High':
        sortBy = 'price';
        sortOrder = 'asc';
        break;
      case 'Price: High to Low':
        sortBy = 'price';
        sortOrder = 'desc';
        break;
      case 'Top Rated':
        sortBy = 'rating';
        sortOrder = 'desc';
        break;
      default:
        sortBy = 'title';
    }

    dispatch(fetchProducts({ limit, skip: 0, sortBy, order: sortOrder }));
  };

  const startProduct = skip + 1;
  const endProduct = Math.min(skip + limit, total);

  return (
    <div className="flex flex-col md:flex-row gap-lg">
      {/* Sidebar Filters */}
      <ProductListFilters />

      {/* Product Grid Section */}
      <section className="flex-1">
        {error && <ErrorBanner message={error} />}

        <div className="flex justify-between items-end mb-lg">
          <div>
            <p className="text-on-surface-variant font-body-md mb-xs">
              {loading ? 'Loading...' : `Showing ${startProduct}–${endProduct} of ${total} results`}
            </p>
            <h2 className="font-h2 text-h2 text-on-background">The Essentials</h2>
          </div>
          <div className="flex items-center gap-sm">
            <span className="font-label-sm text-label-sm text-outline">Sort by</span>
            <select
              className="bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer disabled:opacity-50"
              onChange={handleSortChange}
              disabled={loading}
            >
              <option value="Featured">Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Top Rated">Top Rated</option>
            </select>
          </div>
        </div>

        <ProductListGridImpl loading={loading} />

        {/* Pagination */}
        {!loading && <Pagination />}
      </section>
    </div>
  );
}
