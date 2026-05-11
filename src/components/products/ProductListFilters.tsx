'use client';

import React from 'react';

export default function ProductListFilters() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-lg">
      <div>
        <h3 className="font-h3 text-h3 mb-md text-on-background">Filters</h3>

        {/* Categories */}
        <div className="mb-lg">
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-sm">Categories</p>
          <ul className="space-y-xs">
            <li className="flex items-center gap-sm py-xs cursor-pointer group">
              <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-on-primary rounded-full"></div>
              </div>
              <span className="text-body-md font-semibold text-primary">All Products</span>
            </li>
            {['Skincare', 'Home Fragrance', 'Wellness'].map((cat) => (
              <li key={cat} className="flex items-center gap-sm py-xs cursor-pointer group">
                <div className="w-4 h-4 rounded-full border-2 border-outline group-hover:border-primary transition-colors"></div>
                <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-lg">
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-sm">Price Range</p>
          <div className="space-y-sm px-xs">
            <input
              className="w-full accent-primary bg-outline-variant h-1.5 rounded-lg appearance-none cursor-pointer"
              max="500"
              min="0"
              type="range"
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
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
            <span className="material-symbols-outlined">star</span>
            <span className="ml-sm text-body-md text-on-surface-variant">&amp; Up</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
