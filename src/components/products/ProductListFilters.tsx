'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCategories, setActiveCategory } from '../../store/categoriesSlice';
import { fetchProductsByCategory, fetchProducts } from '../../store/productsSlice';

export default function ProductListFilters() {
  const dispatch = useAppDispatch();
  const { items: categories, activeCategory, loading: categoriesLoading } = useAppSelector(
    (state) => state.categories,
  );
  const { loading: productsLoading } = useAppSelector((state) => state.products);

  // Fetch categories on mount
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const handleCategoryChange = (slug: string | null) => {
    dispatch(setActiveCategory(slug));

    if (slug === null) {
      // Show all products
      dispatch(fetchProducts({ limit: 10, skip: 0 }));
    } else {
      // Filter by category
      dispatch(fetchProductsByCategory({ slug, limit: 10, skip: 0 }));
    }
  };

  const isLoading = categoriesLoading || productsLoading;

  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-lg">
      <div>
        <h3 className="font-h3 text-h3 mb-md text-on-background">Filters</h3>

        {/* Categories */}
        <div className="mb-lg">
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-sm">Categories</p>
          <ul className="space-y-xs">
            <li
              className="flex items-center gap-sm py-xs cursor-pointer group"
              onClick={() => handleCategoryChange(null)}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  activeCategory === null ? 'border-primary bg-primary' : 'border-outline'
                }`}
              >
                {activeCategory === null && <div className="w-1.5 h-1.5 bg-on-primary rounded-full"></div>}
              </div>
              <span
                className={`text-body-md font-semibold transition-colors ${
                  activeCategory === null ? 'text-primary' : 'text-on-surface'
                }`}
              >
                All Products
              </span>
            </li>

            {categories.map((cat) => (
              <li
                key={cat.slug}
                className="flex items-center gap-sm py-xs cursor-pointer group"
                onClick={() => handleCategoryChange(cat.slug)}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                    activeCategory === cat.slug
                      ? 'border-primary bg-primary'
                      : 'border-outline group-hover:border-primary'
                  }`}
                >
                  {activeCategory === cat.slug && (
                    <div className="w-1.5 h-1.5 bg-on-primary rounded-full"></div>
                  )}
                </div>
                <span
                  className={`text-body-md transition-colors ${
                    activeCategory === cat.slug
                      ? 'text-primary font-semibold'
                      : 'text-on-surface-variant group-hover:text-primary'
                  }`}
                >
                  {cat.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-lg">
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-sm">Price Range</p>
          <div className="space-y-sm px-xs">
            <input
              className="w-full accent-primary bg-outline-variant h-1.5 rounded-lg appearance-none cursor-pointer disabled:opacity-50"
              max="500"
              min="0"
              type="range"
              disabled={isLoading}
            />
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-sm">Min Rating</p>
          <div className="flex gap-xs text-tertiary">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
              star
            </span>
            <span className="ml-sm text-body-md text-on-surface-variant">&amp; Up</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
