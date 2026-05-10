import React from 'react';
import { styleVars } from '../common/styleVars';
import IconButton from '../common/IconButton';

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-sm flex-wrap">
      <IconButton
        icon={<span className="material-symbols-outlined">chevron_left</span>}
        ariaLabel="Previous"
        className="border border-outline-variant text-on-surface-variant"
      />
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
            page === 1
              ? 'bg-primary text-on-primary'
              : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container'
          }`}
        >
          {page}
        </button>
      ))}
      <span className="px-xs text-outline">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all">
        8
      </button>
      <IconButton
        icon={<span className="material-symbols-outlined">chevron_right</span>}
        ariaLabel="Next"
        className="border border-outline-variant text-on-surface-variant"
      />
    </div>
  );
}
