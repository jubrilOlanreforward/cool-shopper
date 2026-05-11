import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-xl px-gutter border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="space-y-md">
          <span className="font-h3 text-h3 font-bold text-primary">Serene Shop</span>
          <p className="text-on-surface-variant font-body-md">
            Curating moments of calm through intentional technology and care.
          </p>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-primary cursor-pointer">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer">mail</span>
            <span className="material-symbols-outlined text-primary cursor-pointer">call</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-md">Shop</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">Smart Phones</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Laptops</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Skincare</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Wearables</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-md">Support</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">Track Order</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Returns</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-md">About</h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-xl pt-lg border-t border-outline-variant/10 text-center text-on-surface-variant text-label-sm">
        © 2024 Serene Shop. All rights reserved. Designed for quiet premium.
      </div>
    </footer>
  );
}
