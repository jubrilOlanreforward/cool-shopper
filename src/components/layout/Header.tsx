'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/store';
import { selectCartCount } from '@/store/cartSlice';

interface HeaderProps {
  onMenuToggle?: () => void;
  activeNav?: string;
}

export default function Header({ onMenuToggle, activeNav = 'Shop' }: HeaderProps) {
  const cartCount = useAppSelector(selectCartCount);

  return (
    <header className="bg-background fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-md">
      <div className="flex items-center gap-md">
        <button
          onClick={onMenuToggle}
          className="md:hidden material-symbols-outlined text-on-surface-variant hover:bg-surface-variant/50 transition-colors p-2 rounded-full"
        >
          menu
        </button>
        <Link href="/" className="font-h3 text-h3 font-bold text-primary">
          Serene Shop
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-lg">
        <Link
          className={activeNav === 'Shop' ? 'text-primary font-bold' : 'text-on-surface-variant hover:bg-surface-variant/50 transition-colors px-sm py-xs rounded'}
          href="/"
        >
          Shop
        </Link>
        <Link
          className={activeNav === 'Categories' ? 'text-primary font-bold' : 'text-on-surface-variant hover:bg-surface-variant/50 transition-colors px-sm py-xs rounded'}
          href="/products"
        >
          Categories
        </Link>
        <Link
          className={activeNav === 'Cart' ? 'text-primary font-bold flex flex-col items-center justify-center' : 'text-on-surface-variant hover:bg-surface-variant/50 transition-colors px-sm py-xs rounded'}
          href="/cart"
        >
          Cart
        </Link>
      </nav>

      <div className="flex items-center gap-sm">
        <Link href="/products" className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full">
          search
        </Link>
        <Link href="/cart" className="relative material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full" style={{ fontVariationSettings: cartCount > 0 ? "'FILL' 1" : "'FILL' 0" }}>
          shopping_cart
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
