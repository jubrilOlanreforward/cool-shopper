'use client';

import React from 'react';

interface CartSummaryProps {
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  onCheckout?: () => void;
}

export default function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className="bg-surface-container rounded-xl p-md shadow-sm">
      <h3 className="font-h3 text-h3 text-on-surface mb-md">Order Summary</h3>

      <div className="space-y-sm mb-lg">
        <div className="flex justify-between text-on-surface-variant">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Tax</span>
          <span>{tax}</span>
        </div>
        <div className="border-t border-outline-variant/30 my-sm"></div>
        <div className="flex justify-between text-on-surface font-bold text-body-lg">
          <span>Total</span>
          <span className="text-primary">{total}</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-lg">
        <label className="block font-label-sm text-on-surface-variant mb-xs" htmlFor="promo">
          Promo Code
        </label>
        <div className="flex gap-sm">
          <input
            className="flex-grow bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-sm py-xs focus:ring-2 focus:ring-primary-container focus:outline-none text-body-md"
            id="promo"
            placeholder="Enter code"
            type="text"
          />
          <button className="bg-secondary text-on-secondary px-md py-xs rounded-lg font-bold text-label-sm active:scale-95 transition-transform">
            Apply
          </button>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-primary text-on-primary py-md rounded-lg font-bold text-body-lg shadow-lg active:scale-95 transition-all hover:opacity-90"
      >
        Proceed to Checkout
      </button>

      <div className="mt-md flex items-center justify-center gap-sm text-on-surface-variant font-label-sm">
        <span className="material-symbols-outlined text-[16px]">lock</span>
        Secure Payment Powered by Serene
      </div>
    </div>
  );
}
