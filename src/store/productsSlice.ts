import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, ProductsResponse } from '@/types/product';
import * as api from '@/lib/api';
import { getCachedData, setCachedData, CACHE_KEYS } from '@/lib/cacheUtils';

interface ProductsState {
  items: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  selectedProductLoading: boolean;
  selectedProductError: string | null;
  searchQuery: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

const initialState: ProductsState = {
  items: [],
  total: 0,
  skip: 0,
  limit: 10,
  loading: false,
  error: null,
  selectedProduct: null,
  selectedProductLoading: false,
  selectedProductError: null,
  searchQuery: '',
  sortBy: '',
  sortOrder: 'asc',
};

// --- Thunks ---

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: api.FetchProductsParams = {}) => {
    const { limit = 10, skip = 0, sortBy, order } = params;
    const cacheKey = CACHE_KEYS.products(skip, limit);
    const cached = getCachedData<ProductsResponse>(cacheKey);
    if (cached && !sortBy) return cached;

    const data = await api.getProducts({ limit, skip, sortBy, order });
    if (!sortBy) setCachedData(cacheKey, data);
    return data;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: number) => {
    const cacheKey = CACHE_KEYS.product(id);
    const cached = getCachedData<Product>(cacheKey);
    if (cached) return cached;

    const data = await api.getProductById(id);
    setCachedData(cacheKey, data);
    return data;
  }
);

export const searchProductsThunk = createAsyncThunk(
  'products/searchProducts',
  async ({ query, limit = 10, skip = 0 }: { query: string; limit?: number; skip?: number }) => {
    const cacheKey = CACHE_KEYS.search(`${query}_${skip}_${limit}`);
    const cached = getCachedData<ProductsResponse>(cacheKey);
    if (cached) return cached;

    const data = await api.searchProducts(query, { limit, skip });
    setCachedData(cacheKey, data);
    return data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async ({ slug, limit = 10, skip = 0 }: { slug: string; limit?: number; skip?: number }) => {
    const cacheKey = `category_${slug}_${skip}_${limit}`;
    const cached = getCachedData<ProductsResponse>(cacheKey);
    if (cached) return cached;

    const data = await api.getProductsByCategory(slug, { limit, skip });
    setCachedData(cacheKey, data);
    return data;
  }
);

// --- Slice ---

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortOrder = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
      state.selectedProductError = null;
    },
  },
  extraReducers: (builder) => {
    // fetchProducts
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });

    // fetchProductById
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.selectedProductLoading = true;
        state.selectedProductError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProductLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selectedProductLoading = false;
        state.selectedProductError = action.error.message || 'Failed to fetch product';
      });

    // searchProducts
    builder
      .addCase(searchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(searchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Search failed';
      });

    // fetchProductsByCategory
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch category products';
      });
  },
});

export const { setSearchQuery, setSortBy, setSortOrder, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
