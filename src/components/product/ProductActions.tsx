import React from 'react';
import { styleVars } from '../common/styleVars';
import Button from '../common/Button';
import IconButton from '../common/IconButton';

interface ProductActionsProps {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export default function ProductActions({ onAddToCart, onAddToWishlist }: ProductActionsProps) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="mt-md flex flex-col gap-md">
      <div className="flex flex-wrap gap-md items-center justify-between">
        <div className={`flex items-center border border-outline-variant/40 ${styleVars.rounded} bg-surface-container-low`}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className={`px-md py-base text-primary ${styleVars.active} ${styleVars.transition}`}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className="px-base font-bold text-on-surface min-w-[2ch] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className={`px-md py-base text-primary ${styleVars.active} ${styleVars.transition}`}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="flex-grow">
          <p className="text-label-sm text-on-surface-variant">Free Express Shipping</p>
          <p className="text-label-sm text-primary font-semibold">In Stock • Ready to ship</p>
        </div>
      </div>

      <div className="flex flex-col gap-sm">
        <Button variant="primary" className="w-full py-md flex items-center justify-center gap-sm" onClick={onAddToCart}>
          <span className="material-symbols-outlined">shopping_cart</span>
          Add to Cart
        </Button>
        <Button variant="outline" className="w-full py-md" onClick={onAddToWishlist}>
          Wishlist
        </Button>
      </div>
    </div>
  );
}
