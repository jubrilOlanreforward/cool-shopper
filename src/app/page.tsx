'use client';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { hydrateCart } from '@/store/cartSlice';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import CollectionCTA from '@/components/home/CollectionCTA';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateCart());
  }, [dispatch]);

  return (
    <MainLayout>
      <HeroSection />
      <CategoryGrid />
      <NewArrivalsSection />
      <CollectionCTA />
    </MainLayout>
  );
}
