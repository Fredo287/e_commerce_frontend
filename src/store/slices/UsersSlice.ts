/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// export type IUser = {
//   email: string;
//   password: string;
//   token: string;
// };

// type InitialState = {
//   user: {},
//   loading: boolean,
// }



// Async Actions
export const registerUser = createAsyncThunk("users/register", async (email, password) => {
  return axios.post("https://localhost:7028/api/User/register", {email, password}).then(res => res.data);
});
export const login = createAsyncThunk<any, any>("users/login", async ({email, password}) => {
    return axios.post("https://localhost:7028/api/User/login", {email: email, password: password}).then(res => res.data);
});


const initialState = {
  // user: {email: "", password: ""},
  user: {},
  loading: false,
}

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(login.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
    });
  }
});

// REDUCER
export const usersReducer = users.reducer;

// SELECTORS
// SLICE
export default users;
