import React from 'react';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-surface-container-high rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
}

/**
 * A skeleton card mimicking the product card layout.
 */
export function ProductCardSkeleton() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
      <Skeleton className="aspect-square w-full rounded-none" />
      <div className="p-sm space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

/**
 * A skeleton for the product detail page.
 */
export function ProductDetailSkeleton() {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-lg animate-pulse">
      <div className="md:col-span-7 lg:col-span-8">
        <Skeleton className="aspect-square md:aspect-[4/3] w-full rounded-xl" />
        <div className="hidden sm:flex gap-sm mt-md">
          <Skeleton className="w-24 h-24 rounded-lg" />
          <Skeleton className="w-24 h-24 rounded-lg" />
          <Skeleton className="w-24 h-24 rounded-lg" />
        </div>
      </div>
      <div className="md:col-span-5 lg:col-span-4 mt-lg md:mt-0 space-y-md">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-1 w-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}
