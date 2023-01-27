/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProducts } from "./ProductsSlice";

export type IOrders = {
  OrderId: number,
  Date: string,
  Status: string,
  ReferenceId: number,
  Email: string,
  Products: IProducts[]
};

type InitialState = {
  orders: IOrders[],
  loading: boolean,
}

const initialState: InitialState = {
  orders: [],
  loading: false,
}

// Async Actions
export const createOrder = createAsyncThunk("orders/createOrder", async (id, order) => {
  return axios.post(`https://localhost:7028/api/Order/CreateOrder/${id}`, { body: order })
  .then(res => res.data);
});


const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
    });
  }
});

// REDUCER
export const ordersReducer = orders.reducer;

// SELECTORS
// SLICE
export default orders;
