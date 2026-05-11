'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store';
import { hydrateCart, removeFromCart, updateQuantity, selectCartItems, selectCartSubtotal, selectCartTax, selectCartGrandTotal, selectCartCount } from '@/store/cartSlice';
import type { CartItem } from '@/types/product';
import Header from '@/components/layout/Header';
import NavigationDrawer from '@/components/layout/NavigationDrawer';
import BottomNavBar from '@/components/layout/BottomNavBar';

export default function CartPageRoute() {
  const dispatch = useAppDispatch();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const tax = useAppSelector(selectCartTax);
  const grandTotal = useAppSelector(selectCartGrandTotal);
  const cartCount = useAppSelector(selectCartCount);

  useEffect(() => {
    dispatch(hydrateCart());
  }, [dispatch]);

  return (
    <>
      <Header onMenuToggle={() => setDrawerOpen(true)} activeNav="Cart" />
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="pt-xl pb-xl px-gutter max-w-container-max mx-auto mt-lg">
        <h2 className="font-h2 text-h2 mb-lg text-on-surface">Your Shopping Cart</h2>

        {items.length === 0 ? (
          <div className="py-xl text-center">
            <span className="material-symbols-outlined text-outline text-[64px] mb-md block">shopping_cart</span>
            <p className="text-on-surface-variant font-body-lg mb-md">Your cart is empty</p>
            <Link
              href="/products"
              className="text-primary font-bold hover:underline text-body-lg"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Cart Items */}
            <section className="lg:col-span-8 space-y-md">
              {items.map((item: CartItem) => (
                <div
                  key={item.product.id}
                  className="bg-surface-container-lowest rounded-xl p-md flex flex-col sm:flex-row gap-md shadow-sm border border-outline-variant/20"
                >
                  <Link
                    href={`/products/${item.product.id}`}
                    className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-surface-container flex-shrink-0"
                  >
                    <img
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                      src={item.product.thumbnail}
                    />
                  </Link>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link href={`/products/${item.product.id}`}>
                          <h3 className="font-h3 text-h3 text-on-surface hover:text-primary transition-colors">
                            {item.product.title}
                          </h3>
                        </Link>
                        <p className="text-on-surface-variant">{item.product.category}</p>
                      </div>
                      <span className="font-bold text-body-lg text-primary">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-end mt-md">
                      <div className="flex items-center gap-sm bg-surface-container-low px-sm py-xs rounded-full border border-outline-variant/30">
                        <button
                          className="material-symbols-outlined text-on-surface-variant active:scale-95 transition-transform"
                          onClick={() =>
                            dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity - 1 }))
                          }
                        >
                          remove
                        </button>
                        <span className="font-semibold px-md">{item.quantity}</span>
                        <button
                          className="material-symbols-outlined text-on-surface-variant active:scale-95 transition-transform"
                          onClick={() =>
                            dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity + 1 }))
                          }
                        >
                          add
                        </button>
                      </div>
                      <button
                        className="text-error font-label-sm flex items-center gap-xs hover:underline"
                        onClick={() => dispatch(removeFromCart(item.product.id))}
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Keep Shopping */}
              <div className="py-lg text-center border-2 border-dashed border-outline-variant/20 rounded-xl">
                <p className="text-on-surface-variant font-body-md mb-md">
                  Want to add more serenity to your space?
                </p>
                <Link href="/products" className="text-primary font-bold hover:underline">
                  Keep Shopping
                </Link>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-md">
                <div className="bg-surface-container rounded-xl p-md shadow-sm">
                  <h3 className="font-h3 text-h3 text-on-surface mb-md">Order Summary</h3>
                  <div className="space-y-sm mb-lg">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Subtotal ({cartCount} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Shipping</span>
                      <span>{subtotal >= 50 ? 'Free' : '$9.99'}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-outline-variant/30 my-sm"></div>
                    <div className="flex justify-between text-on-surface font-bold text-body-lg">
                      <span>Total</span>
                      <span className="text-primary">${grandTotal.toFixed(2)}</span>
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

                  <button className="w-full bg-primary text-on-primary py-md rounded-lg font-bold text-body-lg shadow-lg active:scale-95 transition-all hover:opacity-90">
                    Proceed to Checkout
                  </button>

                  <div className="mt-md flex items-center justify-center gap-sm text-on-surface-variant font-label-sm">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    Secure Payment Powered by Serene
                  </div>
                </div>

                {/* Gift Card */}
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
        )}
      </main>

      <BottomNavBar activeTab="Cart" />
    </>
  );
}
