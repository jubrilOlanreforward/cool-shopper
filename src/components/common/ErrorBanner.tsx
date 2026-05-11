import React from 'react';

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return (
    <div className="bg-error-container/30 border border-error/30 text-on-error-container rounded-xl p-md flex flex-col sm:flex-row items-center justify-between gap-md">
      <div className="flex items-center gap-sm">
        <span className="material-symbols-outlined text-error text-[24px]">error</span>
        <p className="font-body-md">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-error text-on-error px-md py-xs rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform hover:opacity-90 whitespace-nowrap"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
