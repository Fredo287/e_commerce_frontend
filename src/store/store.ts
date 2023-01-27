// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/ProductsSlice";
// import { usersReducer } from "./slices/UsersSlice";
// import { ordersReducer } from "./slices/OrdersSlice";


const reducers = {
  products: productsReducer,
  // users: usersReducer,
  // orders: ordersReducer,
};

const store = configureStore({
  reducer: reducers
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

