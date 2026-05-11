'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetails from '@/components/product/ProductDetails';

export default function ProductDetailsPage() {
  return (
    <MainLayout activeNav="Shop" showCartBadge={true}>
      <ProductDetails />
    </MainLayout>
  );
}
