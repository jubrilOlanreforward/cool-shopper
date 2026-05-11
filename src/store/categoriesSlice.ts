import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Category } from '@/types/product';
import * as api from '@/lib/api';
import { getCachedData, setCachedData, CACHE_KEYS } from '@/lib/cacheUtils';

interface CategoriesState {
  items: Category[];
  activeCategory: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  items: [],
  activeCategory: null,
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const cached = getCachedData<Category[]>(CACHE_KEYS.categories);
    if (cached) return cached;

    const data = await api.getCategories();
    setCachedData(CACHE_KEYS.categories, data);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
