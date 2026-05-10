import React from 'react';
import { styleVars } from '../common/styleVars';

export default function Footer() {
  return (
    <footer className={`${styleVars.surfaceContainer} py-xl px-gutter border-t border-outline-variant/10`}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl mb-lg">
        <div className="space-y-md">
          <h3 className={`${styleVars.fontH3} font-bold text-primary`}>Serene Shop</h3>
          <p className="text-on-surface-variant font-body-md">Curating moments of calm through intentional technology and care.</p>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">mail</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">call</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-md text-on-surface">Shop</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="/products">Products</a></li>
            <li><a className="hover:text-primary transition-colors" href="/collections">Collections</a></li>
            <li><a className="hover:text-primary transition-colors" href="/gift-cards">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-md text-on-surface">Support</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="/track">Track Order</a></li>
            <li><a className="hover:text-primary transition-colors" href="/returns">Returns</a></li>
            <li><a className="hover:text-primary transition-colors" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-md text-on-surface">About</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="/story">Our Story</a></li>
            <li><a className="hover:text-primary transition-colors" href="/sustainability">Sustainability</a></li>
            <li><a className="hover:text-primary transition-colors" href="/careers">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto pt-lg border-t border-outline-variant/10 text-center text-on-surface-variant text-label-sm">
        © 2024 Serene Shop. All rights reserved.
      </div>
    </footer>
  );
}
