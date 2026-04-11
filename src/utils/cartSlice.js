import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
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
      console.log("at store", action.payload);
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count = (item.count || 1) + 1;
      }
    },
    decreaseCount: (state, action) => {
      console.log("at store", action.payload);
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count = (item.count || 1) - 1;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
