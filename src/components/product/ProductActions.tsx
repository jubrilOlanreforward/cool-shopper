import React from 'react';

interface ProductActionsProps {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export default function ProductActions({ onAddToCart, onAddToWishlist }: ProductActionsProps) {
  return (
    <>
      {/* CTAs */}
      <div className="flex flex-col gap-sm">
        <button
          onClick={onAddToCart}
          className="w-full bg-primary text-on-primary font-h3 py-md rounded-lg active:scale-95 transition-transform shadow-md hover:brightness-110"
        >
          Add to Cart
        </button>
        <button
          onClick={onAddToWishlist}
          className="w-full border border-on-surface text-on-surface font-h3 py-md rounded-lg active:scale-95 transition-transform hover:bg-on-surface hover:text-white transition-colors"
        >
          Add to Wishlist
        </button>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 gap-md pt-md">
        <div className="flex items-center gap-sm text-on-surface-variant">
          <span className="material-symbols-outlined">local_shipping</span>
          <span className="text-label-sm">Free Shipping</span>
        </div>
        <div className="flex items-center gap-sm text-on-surface-variant">
          <span className="material-symbols-outlined">eco</span>
          <span className="text-label-sm">Sustainably Sourced</span>
        </div>
      </div>
    </>
  );
}
