import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { api } from "./apis/api";

const appStore = configureStore({
  reducer: {
    // [api.reducerPath]: api.reducer, // RTK Query
    cart: cartReducer, // Local ui states
  },
  // middleware: (gdm) => gdm().concat(api.middleware),
});

export default appStore;
