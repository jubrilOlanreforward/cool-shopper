import React from 'react';
import { styleVars } from '../common/styleVars';
import Button from '../common/Button';

export default function EmptyCartSuggestion() {
  return (
    <div className="py-lg text-center border-2 border-dashed border-outline-variant/20 rounded-xl">
      <p className="text-on-surface-variant font-body-md mb-md">Want to add more serenity to your space?</p>
      <a href="/products" className="text-primary font-bold hover:underline">
        Keep Shopping
      </a>
    </div>
  );
}
