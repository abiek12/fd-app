import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        name: "Pizza",
        description: "Delicious cheese pizza",
        price: 999,
        count: 1,
      },
      {
        id: 2,
        name: "Burger",
        description: "Juicy beef burger",
        price: 499,
        count: 1,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Find out the index of item with id/name
      const idx = state.items.findIndex((i) => i.id === action.payload.id);
      if (idx === -1) return;
      state.items.splice(idx, 1);
    },
    clearCart: (state, action) => {
      // Remove all items
      state.items = [];
    },
    increaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count = (item.count || 1) + 1;
      }
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.count <= 1) {
          // Remove item from cart
          const idx = state.items.findIndex((i) => i.id === action.payload);
          if (idx !== -1) {
            state.items.splice(idx, 1);
          }
          return;
        }
        item.count = (item.count || 0) - 1;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
