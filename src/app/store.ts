import { configureStore } from '@reduxjs/toolkit';
import { createOrderSlice } from './features/createOrder';
import { ordersSlice } from './features/order';

export const store = configureStore({
  reducer: {
    orders: ordersSlice.reducer,
    createOrder: createOrderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
