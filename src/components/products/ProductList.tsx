import React from 'react';
import { styleVars } from '../common/styleVars';
import ProductListFilters from './ProductListFilters';
import ProductListGrid from './ProductListGrid';
import Pagination from './Pagination';

export default function ProductList() {
  return (
    <div className="flex flex-col md:flex-row gap-lg">
      <ProductListFilters />
      <div className="flex-1">
        <ProductListGrid />
        <div className="mt-xl">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
