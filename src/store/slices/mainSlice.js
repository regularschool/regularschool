import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: localStorage.getItem("account")
    ? JSON.parse(localStorage.getItem("account"))
    : "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getAccount: (state, action) => {
      state.account = action.payload;
      localStorage.setItem("account", JSON.stringify(action.payload));
    },
  },
});

export const { getAccount } = mainSlice.actions;

export default mainSlice.reducer;
