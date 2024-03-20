import CartChanges from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartValue: CartChanges,
  },
});
export default store;
