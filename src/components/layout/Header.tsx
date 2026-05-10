import React from 'react';
import { styleVars } from '../common/styleVars';
import IconButton from '../common/IconButton';

export default function Header() {
  return (
    <header className={`${styleVars.surface} fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-md border-b border-outline-variant/10`}>
      <div className="flex items-center gap-md">
        <IconButton
          icon={<span className="material-symbols-outlined text-on-surface">menu</span>}
          ariaLabel="Menu"
        />
        <h1 className={`${styleVars.fontH3} font-bold text-primary`}>Serene Shop</h1>
      </div>

      <nav className="hidden md:flex items-center gap-lg">
        <a className="text-primary font-bold font-label-sm text-label-sm" href="/">
          Shop
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="/products">
          Categories
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="/about">
          About
        </a>
      </nav>

      <div className="flex items-center gap-md">
        <IconButton
          icon={<span className="material-symbols-outlined text-on-surface">search</span>}
          ariaLabel="Search"
        />
        <IconButton
          icon={<span className="material-symbols-outlined text-on-surface">shopping_cart</span>}
          ariaLabel="Cart"
        />
      </div>
    </header>
  );
}
