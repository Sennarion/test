import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});
