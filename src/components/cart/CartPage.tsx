import React from 'react';
import { styleVars } from '../common/styleVars';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import PromoCodeInput from './PromoCodeInput';
import EmptyCartSuggestion from './EmptyCartSuggestion';

interface CartPageItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface CartPageProps {
  items: CartPageItemProps[];
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
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  const shipping = 12;
  const tax = (subtotal + shipping) * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="mt-lg">
      <h2 className={`${styleVars.fontH2} mb-lg text-on-surface`}>Your Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        <section className="lg:col-span-8 space-y-md">
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onQuantityChange={(qty) => onUpdateQuantity?.(item.id, qty)}
                  onRemove={() => onRemoveItem?.(item.id)}
                />
              ))}
              <EmptyCartSuggestion />
            </>
          ) : (
            <div className="text-center py-xl">
              <p className="text-on-surface-variant font-body-md mb-md">Your cart is empty</p>
              <a href="/products" className="text-primary font-bold hover:underline">
                Start Shopping
              </a>
            </div>
          )}
        </section>

        <aside className="lg:col-span-4 sticky top-32 space-y-md">
          <CartSummary
            subtotal={`$${subtotal.toFixed(2)}`}
            shipping={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            tax={`$${tax.toFixed(2)}`}
            total={`$${total.toFixed(2)}`}
            onCheckout={onCheckout}
          />

          <div className="bg-primary-container/10 border border-primary-container/30 rounded-xl p-md">
            <div className="flex items-center gap-sm mb-sm">
              <span className="material-symbols-outlined text-primary">redeem</span>
              <h4 className="font-bold text-on-primary-container">Gift Cards Available</h4>
            </div>
            <p className="text-on-surface-variant font-label-sm mb-md">
              Share the calm. Give your loved ones the gift of choice with a Serene Shop digital gift card.
            </p>
            <a href="/gift-cards" className="text-primary font-bold text-label-sm hover:underline">
              Buy Gift Card
            </a>
          </div>

          <PromoCodeInput />
        </aside>
      </div>

      {/* Spacer for mobile */}
      <div className="h-32 md:hidden"></div>
    </div>
  );
}
