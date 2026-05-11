import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, CartItem } from '@/types/product';
import { getPersistentData, setPersistentData, CACHE_KEYS } from '@/lib/cacheUtils';

interface CartState {
  items: CartItem[];
  hydrated: boolean;
}

const initialState: CartState = {
  items: [],
  hydrated: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCart(state) {
      if (state.hydrated) return;
      const persisted = getPersistentData<CartItem[]>(CACHE_KEYS.cart);
      if (persisted) {
        state.items = persisted;
      }
      state.hydrated = true;
    },
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find((item) => item.product.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      setPersistentData(CACHE_KEYS.cart, state.items);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      setPersistentData(CACHE_KEYS.cart, state.items);
    },
    updateQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
      const item = state.items.find((i) => i.product.id === action.payload.productId);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
      setPersistentData(CACHE_KEYS.cart, state.items);
    },
    clearCart(state) {
      state.items = [];
      setPersistentData(CACHE_KEYS.cart, []);
    },
  },
});

export const { hydrateCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// --- Selectors ---
// Use inline state type to avoid circular import with store/index.ts

type CartRootState = { cart: CartState };

export const selectCartItems = (state: CartRootState): CartItem[] => state.cart.items;

export const selectCartCount = (state: CartRootState): number =>
  state.cart.items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

export const selectCartSubtotal = (state: CartRootState): number =>
  state.cart.items.reduce((sum: number, item: CartItem) => sum + item.product.price * item.quantity, 0);

export const selectCartTax = (state: CartRootState): number => {
  const subtotal = selectCartSubtotal(state);
  return +(subtotal * 0.08).toFixed(2);
};

export const selectCartGrandTotal = (state: CartRootState): number => {
  const subtotal = selectCartSubtotal(state);
  const tax = selectCartTax(state);
  return +(subtotal + tax).toFixed(2);
};

export default cartSlice.reducer;
