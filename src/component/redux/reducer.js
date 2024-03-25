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
    },
    searchItems(state,action){
      state.value=action.payload
    }
  },
});
export const { deleteItems, addingStateValue,searchItems } = CartChanges.actions;
export default CartChanges.reducer;
