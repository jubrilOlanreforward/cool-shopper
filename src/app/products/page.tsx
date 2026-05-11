'use client';

import React, { useEffect, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchProducts,
  searchProductsThunk,
  fetchProductsByCategory,
  setSearchQuery,
} from '@/store/productsSlice';
import { fetchCategories, setActiveCategory } from '@/store/categoriesSlice';
import { addToCart } from '@/store/cartSlice';
import { hydrateCart } from '@/store/cartSlice';
import Header from '@/components/layout/Header';
import NavigationDrawer from '@/components/layout/NavigationDrawer';
import BottomNavBar from '@/components/layout/BottomNavBar';
import { ProductCardSkeleton } from '@/components/common/Skeleton';
import ErrorBanner from '@/components/common/ErrorBanner';
import type { Product } from '@/types/product';

const ITEMS_PER_PAGE = 10;

function ProductsPageContent() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // URL params
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  // Redux state
  const { items, total, loading, error } = useAppSelector((s) => s.products);
  const { items: categories } = useAppSelector((s) => s.categories);

  // Local search input state with debounce
  const [searchInput, setSearchInput] = React.useState(queryParam);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hydrate cart on mount
  useEffect(() => {
    dispatch(hydrateCart());
  }, [dispatch]);

  // Fetch categories on mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Fetch products when URL params change
  useEffect(() => {
    const skip = (pageParam - 1) * ITEMS_PER_PAGE;
    if (queryParam) {
      dispatch(searchProductsThunk({ query: queryParam, limit: ITEMS_PER_PAGE, skip }));
      dispatch(setSearchQuery(queryParam));
      dispatch(setActiveCategory(null));
    } else if (categoryParam) {
      dispatch(fetchProductsByCategory({ slug: categoryParam, limit: ITEMS_PER_PAGE, skip }));
      dispatch(setActiveCategory(categoryParam));
      dispatch(setSearchQuery(''));
    } else {
      dispatch(fetchProducts({ limit: ITEMS_PER_PAGE, skip }));
      dispatch(setActiveCategory(null));
      dispatch(setSearchQuery(''));
    }
  }, [dispatch, queryParam, categoryParam, pageParam]);

  // Sync search input when URL query changes
  useEffect(() => {
    setSearchInput(queryParam);
  }, [queryParam]);

  // Debounced search handler
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const params = new URLSearchParams();
        if (value.trim()) params.set('q', value.trim());
        router.push(`/products?${params.toString()}`);
      }, 500);
    },
    [router]
  );

  // Category click handler
  const handleCategoryClick = useCallback(
    (slug: string | null) => {
      const params = new URLSearchParams();
      if (slug) params.set('category', slug);
      router.push(`/products?${params.toString()}`);
    },
    [router]
  );

  // Pagination
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      router.push(`/products?${params.toString()}`);
    },
    [router, searchParams]
  );

  // Add to cart
  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  // Retry fetch
  const handleRetry = useCallback(() => {
    const skip = (pageParam - 1) * ITEMS_PER_PAGE;
    if (queryParam) {
      dispatch(searchProductsThunk({ query: queryParam, limit: ITEMS_PER_PAGE, skip }));
    } else if (categoryParam) {
      dispatch(fetchProductsByCategory({ slug: categoryParam, limit: ITEMS_PER_PAGE, skip }));
    } else {
      dispatch(fetchProducts({ limit: ITEMS_PER_PAGE, skip }));
    }
  }, [dispatch, queryParam, categoryParam, pageParam]);

  // Page title
  const pageTitle = useMemo(() => {
    if (queryParam) return `Results for "${queryParam}"`;
    if (categoryParam) {
      const cat = categories.find((c) => c.slug === categoryParam);
      return cat ? cat.name : categoryParam;
    }
    return 'The Essentials';
  }, [queryParam, categoryParam, categories]);

  // Star rendering
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-tertiary text-[14px]"
        style={{ fontVariationSettings: `'FILL' ${i < Math.round(rating) ? 1 : 0}` }}
      >
        star
      </span>
    ));
  };

  return (
    <>
      <Header onMenuToggle={() => setDrawerOpen(true)} activeNav="Categories" />
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="pt-xl pb-xl px-gutter max-w-container-max mx-auto mt-lg">
        {/* Search Bar */}
        <section className="mb-lg">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input
              className="block w-full pl-10 pr-md py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md"
              placeholder="Search for products, brands..."
              type="search"
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </section>

        {/* Category Chips */}
        <section className="mb-lg">
          <div className="flex space-x-sm overflow-x-auto pb-xs -mx-gutter px-gutter" style={{ scrollbarWidth: 'none' }}>
            <button
              onClick={() => handleCategoryClick(null)}
              className={`whitespace-nowrap px-md py-2 rounded-full font-label-sm active:scale-95 transition-all shadow-sm ${
                !categoryParam
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              All
            </button>
            {categories.slice(0, 8).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`whitespace-nowrap px-md py-2 rounded-full font-label-sm active:scale-95 transition-all ${
                  categoryParam === cat.slug
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Header + Sort */}
        <div className="flex justify-between items-end mb-lg">
          <div>
            <p className="text-on-surface-variant font-body-md mb-xs">
              {loading ? 'Loading...' : `Showing ${items.length} of ${total} results`}
            </p>
            <h2 className="font-h2 text-h2 text-on-background">{pageTitle}</h2>
          </div>
        </div>

        {/* Error Banner */}
        {error && <div className="mb-lg"><ErrorBanner message={error} onRetry={handleRetry} /></div>}

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-gutter">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : items.length === 0 && !error ? (
          <div className="py-xl text-center">
            <span className="material-symbols-outlined text-outline text-[64px] mb-md block">search_off</span>
            <p className="text-on-surface-variant font-body-lg mb-md">No products found</p>
            <button
              onClick={() => { setSearchInput(''); router.push('/products'); }}
              className="text-primary font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-gutter">
            {items.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] h-full"
              >
                <button
                  onClick={() => router.push(`/products/${product.id}`)}
                  className="aspect-square relative overflow-hidden bg-surface-container-low cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={product.title}
                    src={product.thumbnail}
                  />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full text-on-surface-variant hover:text-error transition-colors">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </div>
                </button>
                <div className="p-sm flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-on-surface-variant font-label-sm opacity-70 text-[10px] uppercase tracking-wider">
                      {product.category}
                    </p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-tertiary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm text-on-surface-variant text-[11px]">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push(`/products/${product.id}`)}
                    className="text-left"
                  >
                    <h3 className="font-body-md font-semibold text-on-surface line-clamp-2 mb-2 min-h-[3.2em] leading-tight">
                      {product.title}
                    </h3>
                  </button>
                  <div className="mt-auto flex justify-between items-center gap-2">
                    <span className="font-h3 text-primary text-base sm:text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary-container text-on-primary-container p-2 rounded-lg active:scale-90 transition-transform"
                    >
                      <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && !loading && (
          <div className="mt-lg flex justify-center items-center gap-sm">
            <button
              disabled={pageParam <= 1}
              onClick={() => handlePageChange(pageParam - 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
              let page: number;
              if (totalPages <= 5) {
                page = i + 1;
              } else if (pageParam <= 3) {
                page = i + 1;
              } else if (pageParam >= totalPages - 2) {
                page = totalPages - 4 + i;
              } else {
                page = pageParam - 2 + i;
              }
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                    page === pageParam
                      ? 'bg-primary text-on-primary'
                      : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              disabled={pageParam >= totalPages}
              onClick={() => handlePageChange(pageParam + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
      </main>

      <BottomNavBar activeTab="Categories" />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin material-symbols-outlined text-primary text-[48px]">progress_activity</div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}
