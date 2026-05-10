'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductDetails from '@/components/product/ProductDetails';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({ params }: PageProps) {
  const [product] = React.useState({
    id: params.id,
    title: 'Minimalist Chrono Series 01',
    category: 'Premium Collection',
    price: '$189.00',
    rating: 4.8,
    reviewCount: 124,
    description:
      'Crafted for the modern essentialist, the Series 01 features a surgical-grade stainless steel casing and a sapphire crystal glass. Its quiet elegance is matched by a high-precision Japanese quartz movement, ensuring reliability without the noise.',
    inStock: true,
  });

  return (
    <MainLayout>
      <ProductDetails productData={product} />
    </MainLayout>
  );
}
