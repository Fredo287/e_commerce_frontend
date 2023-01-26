// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/ProductsSlice";
// import { ordersReducer } from "./slices/OrdersSlice";
// import { usersReducer } from "./slices/UsersSlice";


const reducers = {
  products: productsReducer,
  // orders: ordersReducer,
  // users: usersReducer
};

const store = configureStore({
  reducer: reducers
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

