import { createSlice } from "@reduxjs/toolkit";

const CartChanges = createSlice({
  name: "changes",
  initialState: { value: '', items: [] },
  reducers: {
    deleteItems(state, action) {
      state.items = state.items.filter((items) => items.id !== action.payload);
    },
    addingStateValue(state, action) {
      state.items = [...action.payload];
    }
  },
});
export const { deleteItems, addingStateValue } = CartChanges.actions;
export default CartChanges.reducer;
