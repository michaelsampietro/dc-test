import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';

type OrdersSliceType = {
  orders: Order[];
  selectedOrder?: Order;
};

const initialState: OrdersSliceType = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    setSelectedOrder: (state, action: PayloadAction<Order | undefined>) => {
      state.selectedOrder = action.payload;
    },
  },
});

export const { saveOrders, setSelectedOrder } = ordersSlice.actions;
