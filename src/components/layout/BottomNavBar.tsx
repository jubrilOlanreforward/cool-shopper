import React from 'react';
import { styleVars } from '../common/styleVars';
import IconButton from '../common/IconButton';

export default function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-sm bg-surface-container-lowest border-t border-outline-variant/20 z-50">
      <a href="/" className="flex flex-col items-center justify-center text-primary font-bold transition-colors py-sm">
        <span className="material-symbols-outlined text-2xl">storefront</span>
        <span className="font-label-sm text-label-sm mt-xs">Shop</span>
      </a>
      <a href="/products" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors py-sm">
        <span className="material-symbols-outlined text-2xl">category</span>
        <span className="font-label-sm text-label-sm mt-xs">Categories</span>
      </a>
      <a href="/cart" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors py-sm">
        <span className="material-symbols-outlined text-2xl">shopping_cart</span>
        <span className="font-label-sm text-label-sm mt-xs">Cart</span>
      </a>
      <a href="/profile" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors py-sm">
        <span className="material-symbols-outlined text-2xl">person</span>
        <span className="font-label-sm text-label-sm mt-xs">Profile</span>
      </a>
    </nav>
  );
}
