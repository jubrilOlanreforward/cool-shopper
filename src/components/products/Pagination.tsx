'use client';

import React from 'react';

export default function Pagination() {
  return (
    <div className="mt-xl flex justify-center items-center gap-sm">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
        3
      </button>
      <span className="px-xs text-outline">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
        8
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
