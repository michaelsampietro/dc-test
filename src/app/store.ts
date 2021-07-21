import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./features/order";

export const store = configureStore({
  reducer: {
    orders: ordersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
