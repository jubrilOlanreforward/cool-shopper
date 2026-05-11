'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProductById, clearSelectedProduct } from '@/store/productsSlice';
import { addToCart, hydrateCart } from '@/store/cartSlice';
import Header from '@/components/layout/Header';
import NavigationDrawer from '@/components/layout/NavigationDrawer';
import BottomNavBar from '@/components/layout/BottomNavBar';
import { ProductDetailSkeleton } from '@/components/common/Skeleton';
import ErrorBanner from '@/components/common/ErrorBanner';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const { selectedProduct: product, selectedProductLoading: loading, selectedProductError: error } =
    useAppSelector((s) => s.products);

  useEffect(() => {
    dispatch(hydrateCart());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) dispatch(addToCart(product));
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-[20px]"
        style={{ fontVariationSettings: `'FILL' ${i < Math.round(rating) ? 1 : 0}` }}
      >
        star
      </span>
    ));

  return (
    <>
      <Header onMenuToggle={() => setDrawerOpen(true)} activeNav="Shop" />
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="pt-[72px] pb-[100px] max-w-container-max mx-auto px-gutter">
        {error && (
          <div className="mt-lg">
            <ErrorBanner message={error} onRetry={() => dispatch(fetchProductById(Number(id)))} />
          </div>
        )}

        {loading && <div className="mt-lg"><ProductDetailSkeleton /></div>}

        {product && !loading && (
          <>
            <div className="md:grid md:grid-cols-12 md:gap-lg mt-md">
              {/* Image Gallery */}
              <section className="md:col-span-7 lg:col-span-8 flex flex-col gap-md">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover"
                    src={product.images[activeImageIndex] || product.thumbnail}
                  />
                  {/* Dot indicators */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-xs">
                      {product.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`w-2 h-2 rounded-full ${i === activeImageIndex ? 'bg-primary' : 'bg-outline-variant'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="hidden sm:flex gap-sm md:gap-md overflow-x-auto pb-xs" style={{ scrollbarWidth: 'none' }}>
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-colors ${
                          i === activeImageIndex ? 'border-2 border-primary' : 'border border-outline-variant/30 hover:border-primary'
                        }`}
                      >
                        <img alt={`${product.title} ${i + 1}`} className="w-full h-full object-cover" src={img} />
                      </button>
                    ))}
                  </div>
                )}
              </section>

              {/* Product Info */}
              <section className="md:col-span-5 lg:col-span-4 mt-lg md:mt-0 flex flex-col gap-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      {product.category}
                    </span>
                    <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  </div>
                  <h2 className="font-h1 text-h1 text-on-surface">{product.title}</h2>
                  <div className="flex flex-wrap items-center justify-between gap-sm">
                    <span className="font-h2 text-h2 text-primary font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-xs text-tertiary">
                      {renderStars(product.rating)}
                      <span className="font-body-md font-semibold">{product.rating.toFixed(1)}</span>
                      <span className="text-on-surface-variant text-label-sm">
                        ({product.reviews?.length || 0} reviews)
                      </span>
                    </div>
                  </div>
                  {product.discountPercentage > 0 && (
                    <span className="bg-error text-on-error text-[10px] font-bold px-sm py-[2px] rounded-full uppercase inline-block w-fit">
                      {product.discountPercentage.toFixed(0)}% OFF
                    </span>
                  )}
                </div>

                <div className="h-[1px] w-full bg-outline-variant/20"></div>

                <div className="flex flex-col gap-sm">
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Description
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-md flex flex-col gap-md">
                  <div className="flex flex-wrap gap-md items-center justify-between">
                    <div className="flex-grow">
                      <p className="text-label-sm text-on-surface-variant">{product.shippingInformation}</p>
                      <p className="text-label-sm text-primary font-semibold">
                        {product.availabilityStatus} • {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-sm">
                    <button
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                      className="w-full bg-primary text-on-primary py-md rounded-lg font-h3 text-h3 shadow-sm hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-sm disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">shopping_cart</span>
                      Add to Cart
                    </button>
                    <button className="w-full border border-secondary text-secondary py-md rounded-lg font-body-lg font-semibold hover:bg-secondary/5 transition-colors">
                      Wishlist
                    </button>
                  </div>
                </div>

                {/* Specs & Shipping Details */}
                <div className="mt-lg flex flex-col gap-md">
                  <details className="group border-b border-outline-variant/20 pb-sm">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-base outline-none">
                      <span className="font-body-md font-semibold text-on-surface">Specifications</span>
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="pt-base text-on-surface-variant text-label-sm leading-loose">
                      {product.brand && (
                        <div className="flex justify-between border-b border-outline-variant/10 py-xs">
                          <span>Brand</span><span>{product.brand}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-b border-outline-variant/10 py-xs">
                        <span>Weight</span><span>{product.weight}g</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/10 py-xs">
                        <span>Warranty</span><span>{product.warrantyInformation}</span>
                      </div>
                      <div className="flex justify-between py-xs">
                        <span>SKU</span><span>{product.sku}</span>
                      </div>
                    </div>
                  </details>
                  <details className="group border-b border-outline-variant/20 pb-sm">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-base outline-none">
                      <span className="font-body-md font-semibold text-on-surface">Shipping & Returns</span>
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <p className="pt-base text-on-surface-variant text-label-sm">
                      {product.shippingInformation}. {product.returnPolicy}.
                    </p>
                  </details>
                </div>

                {/* Reviews */}
                {product.reviews && product.reviews.length > 0 && (
                  <div className="mt-lg">
                    <h3 className="font-h3 text-h3 text-on-surface mb-md">Reviews</h3>
                    <div className="space-y-md">
                      {product.reviews.map((review, i) => (
                        <div key={i} className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant/20">
                          <div className="flex items-center justify-between mb-xs">
                            <span className="font-semibold text-on-surface">{review.reviewerName}</span>
                            <div className="flex text-tertiary">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <span
                                  key={j}
                                  className="material-symbols-outlined text-[14px]"
                                  style={{ fontVariationSettings: `'FILL' ${j < review.rating ? 1 : 0}` }}
                                >
                                  star
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-on-surface-variant text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </>
        )}
      </main>

      <BottomNavBar activeTab="Shop" />
    </>
  );
}
