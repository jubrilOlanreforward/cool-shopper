'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../store';
import { searchProductsThunk } from '../../store/productsSlice';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchProductsThunk({ query: searchQuery, limit: 10, skip: 0 }));
      router.push('/products');
    }
  };

  return (
    <section className="mb-xl">
      <div className="max-w-3xl mx-auto text-center space-y-md">
        <h1 className="font-h1 text-h1 text-on-background">Find your zen.</h1>
        <form onSubmit={handleSearch} className="relative group">
          <input
            className="w-full bg-[#FAF9F6] border border-outline-variant/30 rounded-xl py-md px-lg pl-14 text-body-lg focus:outline-none focus:ring-2 focus:ring-primary-container transition-all soft-elevation"
            placeholder="Search for products, brands, or categories..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute left-5 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
    </section>
  );
}
