'use client';

import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchCategories } from '@/store/categoriesSlice';
import { fetchProducts } from '@/store/productsSlice';
import { hydrateCart } from '@/store/cartSlice';
import Header from '@/components/layout/Header';
import NavigationDrawer from '@/components/layout/NavigationDrawer';
import BottomNavBar from '@/components/layout/BottomNavBar';
import type { Product } from '@/types/product';

// Map category slugs to Material Symbols icons
const CATEGORY_ICONS: Record<string, string> = {
  smartphones: 'smartphone',
  laptops: 'laptop',
  fragrances: 'flare',
  'skin-care': 'sanitizer',
  groceries: 'shopping_basket',
  'home-decoration': 'chair',
  furniture: 'weekend',
  tops: 'checkroom',
  'womens-dresses': 'styler',
  'womens-shoes': 'footprint',
  'mens-shirts': 'apparel',
  'mens-shoes': 'hiking',
  'mens-watches': 'watch',
  'womens-watches': 'watch',
  'womens-bags': 'backpack',
  'womens-jewellery': 'diamond',
  sunglasses: 'visibility',
  motorcycle: 'two_wheeler',
  vehicle: 'directions_car',
  'kitchen-accessories': 'cooking',
  'sports-accessories': 'sports_soccer',
  tablets: 'tablet',
  'mobile-accessories': 'charger',
  beauty: 'face_retouching_natural',
};

// Colors for category cards
const CATEGORY_COLORS = [
  'bg-primary-container',
  'bg-surface-container-highest',
  'bg-secondary-container',
  'bg-tertiary-container',
  'bg-surface-container-high',
  'bg-surface-container-high',
];

export default function CategoriesPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');

  const { items: categories } = useAppSelector((s) => s.categories);
  const { items: trendingProducts, loading } = useAppSelector((s) => s.products);

  useEffect(() => {
    dispatch(hydrateCart());
    dispatch(fetchCategories());
    dispatch(fetchProducts({ limit: 6, skip: 0 }));
  }, [dispatch]);

  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchSubmit = useCallback(
    (value: string) => {
      if (value.trim()) {
        router.push(`/products?q=${encodeURIComponent(value.trim())}`);
      }
    },
    [router]
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (value.trim()) {
          handleSearchSubmit(value);
        }
      }, 500);
    },
    [handleSearchSubmit]
  );

  // Top 6 categories for the bento grid
  const topCategories = categories.slice(0, 6);

  return (
    <>
      <Header onMenuToggle={() => setDrawerOpen(true)} activeNav="Categories" />
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="px-gutter pt-xl mt-lg max-w-container-max mx-auto overflow-x-hidden pb-xl">
        {/* Search Bar */}
        <section className="mb-lg">
          <div className="relative group max-w-2xl mx-auto">
            <input
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-outline shadow-sm text-body-md"
              placeholder="Search for products, brands..."
              type="search"
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearchSubmit(searchInput); }}
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold pointer-events-none">
              search
            </span>
          </div>
        </section>

        {/* Recent Searches */}
        <section className="mb-lg">
          <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-sm uppercase tracking-wider">
            Recent Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Wireless Earbuds', 'Minimalist Desk', 'Laptops'].map((term) => (
              <button
                key={term}
                onClick={() => router.push(`/products?q=${encodeURIComponent(term)}`)}
                className="px-4 py-2 bg-surface-container-high rounded-full text-[14px] font-medium text-on-surface-variant flex items-center gap-xs hover:bg-primary-container/20 transition-colors cursor-pointer active:scale-95"
              >
                <span>{term}</span>
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            ))}
          </div>
        </section>

        {/* Categories Bento Grid */}
        <section className="mb-xl">
          <div className="flex justify-between items-end mb-md">
            <h2 className="font-h3 text-h3 text-on-background">Explore Categories</h2>
            <button
              onClick={() => router.push('/products')}
              className="text-primary font-label-sm text-label-sm hover:underline active:opacity-70 transition-opacity"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-sm" style={{ gridAutoRows: 'minmax(120px, auto)' }}>
            {topCategories.map((cat, i) => {
              const icon = CATEGORY_ICONS[cat.slug] || 'category';
              const bgColor = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
              const isTall = i === 0;
              const isWide = i === 3;

              return (
                <button
                  key={cat.slug}
                  onClick={() => router.push(`/products?category=${cat.slug}`)}
                  className={`${bgColor} rounded-xl p-md flex flex-col justify-between overflow-hidden relative group cursor-pointer active:scale-[0.98] transition-transform shadow-sm text-left ${
                    isTall ? 'row-span-2' : ''
                  } ${isWide ? 'col-span-2 flex-row items-center min-h-[140px]' : ''}`}
                >
                  <div className="z-10">
                    <span className={`material-symbols-outlined ${isTall ? 'text-[32px]' : 'text-[28px]'} mb-xs`}>
                      {icon}
                    </span>
                    <h3 className={`${isTall ? 'font-h3 text-h3' : 'font-body-lg text-body-lg font-bold'} leading-tight`}>
                      {cat.name}
                    </h3>
                  </div>
                  <div className="absolute right-0 bottom-0 w-20 h-20 bg-black/5 rounded-full -mr-4 -mb-4 group-hover:scale-150 transition-transform duration-500"></div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Trending Now */}
        <section className="mb-xl">
          <h2 className="font-h3 text-h3 text-on-background mb-md">Trending Now</h2>
          <div
            className="flex gap-md overflow-x-auto pb-4 snap-x -mx-gutter px-gutter"
            style={{ scrollbarWidth: 'none' }}
          >
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="snap-start min-w-[200px] w-[60%] sm:w-[280px] flex-shrink-0 animate-pulse">
                    <div className="bg-surface-container-high rounded-xl h-48 w-full mb-sm"></div>
                    <div className="bg-surface-container-high rounded h-4 w-3/4 mb-xs"></div>
                    <div className="bg-surface-container-high rounded h-4 w-1/2"></div>
                  </div>
                ))
              : trendingProducts.slice(0, 6).map((product: Product) => (
                  <div
                    key={product.id}
                    className="snap-start min-w-[200px] w-[60%] sm:w-[280px] bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex-shrink-0 border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={product.title}
                        src={product.thumbnail}
                      />
                    </div>
                    <div className="p-sm">
                      <p className="font-label-sm text-[11px] text-outline mb-xs uppercase">{product.category}</p>
                      <h4 className="font-body-md text-body-md font-bold text-on-surface truncate">{product.title}</h4>
                      <div className="flex justify-between items-center mt-xs">
                        <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                        <span className="material-symbols-outlined text-[20px] text-primary cursor-pointer active:scale-90 transition-transform">
                          add_circle
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>

      <BottomNavBar activeTab="Categories" />
    </>
  );
}
