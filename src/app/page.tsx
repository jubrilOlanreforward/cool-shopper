'use client';

import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import CollectionCTA from '@/components/home/CollectionCTA';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <CategoryGrid />
      <NewArrivalsSection />
      <CollectionCTA />
    </MainLayout>
  );
}
