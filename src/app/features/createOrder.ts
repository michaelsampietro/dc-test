import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedItemType } from '../../pages/CreateOrder/components/ItemsSelection';

type CreateOrderSliceType = {
  items: SelectedItemType[];
};

const initialState: CreateOrderSliceType = {
  items: [],
};

export const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    updateItems: (state, action: PayloadAction<SelectedItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { updateItems } = createOrderSlice.actions;
