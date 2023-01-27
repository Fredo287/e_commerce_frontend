/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type IProducts = {
  productId: number;
  name: string;
  description: string;
  stock: number;
  categoryId: number;
  category: null;
};

type InitialState = {
  products: IProducts[],
  loading: boolean,
}

// Async Actions
export const getProducts = createAsyncThunk("products/getProducts", async () => {
    return axios.get("https://localhost:7028/api/Product")
    .then(res => res.data);
});
export const getProduct = createAsyncThunk("products/getProduct", async (id) => {
    return axios.get(`https://localhost:7028/api/Product/${id}`)
    .then(res => res.data);
});
export const searchProduct = createAsyncThunk("products/getProduct", async (name) => {
    return axios.post(`https://localhost:7028/api/Product/SearchForProduct`, {name: name})
    .then(res => res.data);
});


const initialState: InitialState = {
  products: [],
  loading: false,
}


const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<IProducts[]>) => {
      state.loading = false;
      state.products = action.payload;
    });
  }
});

// REDUCER
export const productsReducer = products.reducer;

// SELECTORS
// SLICE
export default products;
