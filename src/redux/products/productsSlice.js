import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      }),
});

export const productsReducer = productsSlice.reducer;
