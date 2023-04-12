import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://643667168205915d34f2961e.mockapi.io/products';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
