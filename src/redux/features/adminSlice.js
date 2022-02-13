import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const adminSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    saveAdmin: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn",action.payload)
    },
  },
});

export const { saveAdmin } = adminSlice.actions;
export const selectAdmin = (state) => state.isLoggedIn.isLoggedIn;
export default adminSlice.reducer;
