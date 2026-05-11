'use client';

import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProducts } from '../../store/productsSlice';

export default function Pagination() {
  const dispatch = useAppDispatch();
  const { skip, limit, total, loading } = useAppSelector((state) => state.products);

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  // Generate page numbers to display with ellipsis
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];

    if (totalPages <= 8) {
      // Show all pages if 8 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first 3 pages
      pages.push(1, 2, 3);

      // Add ellipsis if current page is far from start
      if (currentPage > 5) {
        pages.push('...');
      }

      // Show pages around current page
      if (currentPage > 5 && currentPage < totalPages - 4) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }

      // Add ellipsis if current page is far from end
      if (currentPage < totalPages - 4) {
        pages.push('...');
      }

      // Always show last 3 pages
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * limit;
    dispatch(fetchProducts({ limit, skip: newSkip }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-xl flex justify-center items-center gap-sm">
      {/* Previous Button */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handlePrevious}
        disabled={currentPage === 1 || loading}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="px-xs text-outline">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
              page === currentPage
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container'
            } disabled:opacity-50`}
            onClick={() => handlePageChange(page as number)}
            disabled={loading}
          >
            {page}
          </button>
        ),
      )}

      {/* Next Button */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleNext}
        disabled={currentPage === totalPages || loading}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
