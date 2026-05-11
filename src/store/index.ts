import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
