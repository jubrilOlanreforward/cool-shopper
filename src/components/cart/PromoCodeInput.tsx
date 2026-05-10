import React from 'react';
import { styleVars } from '../common/styleVars';
import Button from '../common/Button';

interface PromoCodeInputProps {
  onApply?: (code: string) => void;
}

export default function PromoCodeInput({ onApply }: PromoCodeInputProps) {
  const [code, setCode] = React.useState('');

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Promo code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={`w-full bg-surface-container-lowest border border-outline-variant/30 ${styleVars.rounded} py-md px-md focus:ring-2 focus:ring-primary-container focus:border-primary outline-none ${styleVars.transition} font-body-md`}
      />
      <Button
        variant="secondary"
        className="absolute right-sm top-1/2 -translate-y-1/2 !px-md !py-xs"
        onClick={() => onApply?.(code)}
      >
        Apply
      </Button>
    </div>
  );
}
