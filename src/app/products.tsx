'use client';

import MainLayout from '@/components/layout/MainLayout';
import ProductList from '@/components/products/ProductList';

export default function ProductsPage() {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
}
