'use client';

import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCartSuggestion from './EmptyCartSuggestion';

interface CartPageItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface CartPageProps {
  items: CartPageItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  onCheckout?: () => void;
}

export default function CartPage({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartPageProps) {
  return (
    <>
      <h2 className="font-h2 text-h2 mb-lg text-on-surface">Your Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Cart Items Section */}
        <section className="lg:col-span-8 space-y-md">
          {items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onQuantityChange={(qty) => onUpdateQuantity?.(item.id, qty)}
              onRemove={() => onRemoveItem?.(item.id)}
            />
          ))}
          <EmptyCartSuggestion />
        </section>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-md">
            <CartSummary
              subtotal="$260.00"
              shipping="Free"
              tax="$20.80"
              total="$280.80"
              onCheckout={onCheckout}
            />

            {/* Gift Card Promo */}
            <div className="bg-primary-container/10 border border-primary-container/30 rounded-xl p-md">
              <div className="flex items-center gap-sm mb-sm">
                <span className="material-symbols-outlined text-primary">redeem</span>
                <h4 className="font-bold text-on-primary-container">Gift Cards Available</h4>
              </div>
              <p className="text-on-surface-variant font-label-sm mb-md">
                Share the calm. Give your loved ones the gift of choice with a Serene Shop digital gift card.
              </p>
              <button className="text-primary font-bold text-label-sm hover:underline">
                Buy Gift Card
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
