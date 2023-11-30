import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getLang: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getLang } = mainSlice.actions;

export default mainSlice.reducer;
