import React from 'react';
import { styleVars } from '../common/styleVars';
import Button from '../common/Button';

interface CartSummaryProps {
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  onCheckout?: () => void;
}

export default function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className={`${styleVars.surfaceContainer} ${styleVars.rounded} p-md ${styleVars.shadow} space-y-sm`}>
      <h2 className={`${styleVars.fontH3} text-on-surface mb-md`}>Order Summary</h2>

      <div className="flex justify-between font-body-md text-on-surface-variant">
        <span>Subtotal</span>
        <span className="font-semibold text-on-surface">{subtotal}</span>
      </div>

      <div className="flex justify-between font-body-md text-on-surface-variant">
        <span>Shipping</span>
        <span className="font-semibold text-on-surface">{shipping}</span>
      </div>

      <div className="flex justify-between font-body-md text-on-surface-variant">
        <span>Tax</span>
        <span className="font-semibold text-on-surface">{tax}</span>
      </div>

      <div className="pt-sm mt-sm border-t border-outline-variant/30 flex justify-between items-center">
        <span className={`${styleVars.fontH3} font-bold text-on-surface`}>Total</span>
        <span className={`${styleVars.fontH2} font-bold text-primary`}>{total}</span>
      </div>

      <Button variant="primary" className="w-full py-md mt-md" onClick={onCheckout}>
        Proceed to Checkout
      </Button>

      <div className="flex items-center justify-center gap-sm text-on-surface-variant font-label-sm mt-md">
        <span className="material-symbols-outlined text-[16px]">lock</span>
        Secure Payment Powered by Serene
      </div>
    </div>
  );
}
