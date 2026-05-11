'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/store';
import { selectCartCount } from '@/store/cartSlice';

interface BottomNavBarProps {
  activeTab?: string;
}

export default function BottomNavBar({ activeTab = 'Shop' }: BottomNavBarProps) {
  const cartCount = useAppSelector(selectCartCount);

  const tabs = [
    { label: 'Shop', icon: 'storefront', href: '/' },
    { label: 'Categories', icon: 'category', href: '/products' },
    { label: 'Cart', icon: 'shopping_cart', href: '/cart' },
    { label: 'Profile', icon: 'person', href: '#' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-sm bg-surface-container-lowest border-t border-outline-variant/20 z-50">
      {tabs.map((tab) => {
        const isActive = tab.label === activeTab;
        const isCart = tab.label === 'Cart';
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center justify-center ${
              isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary transition-colors'
            }`}
          >
            <div className="relative">
              <span
                className="material-symbols-outlined"
                style={isActive && isCart ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              {isCart && cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-on-primary text-[10px] px-[5px] rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-label-sm text-label-sm">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
