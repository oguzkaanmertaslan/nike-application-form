import { configureStore } from '@reduxjs/toolkit';
import userTicketReducer from "../features/userTicketSlice"
import ticketReducer from "../features/ticketsSlice"
import adminReducer from "../features/adminSlice"

export const store = configureStore({
  reducer: {
    userTicket: userTicketReducer,
    tickets: ticketReducer,
    isLoggedIn: adminReducer,
  },
});



