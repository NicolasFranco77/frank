import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Products/data";

const initialState = {
  cartItems: data,
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const { removeItem } = cartSlice.actions;
export default cartSlice.reducer;
