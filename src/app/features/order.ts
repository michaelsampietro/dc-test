import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Order } from "../../types/Order";

const initialState: any = null;

export const ordersSlice = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveOrders: (state, action: PayloadAction<Order[]>) => {
      return state = action.payload
    }
  },
});

export const { saveOrders } = ordersSlice.actions;
