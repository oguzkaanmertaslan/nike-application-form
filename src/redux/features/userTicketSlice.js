import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTicket: [],
};

const userTicketSlice = createSlice({
  name: "userTicket",
  initialState,
  reducers: {
    saveUserTicket: (state, action) => {
      state.userTicket.push(action.payload);
    },
  },
});

export const { saveUserTicket } = userTicketSlice.actions;
export const selectUserTicket = (state) => state.userTicket.userTicket;
export default userTicketSlice.reducer;
