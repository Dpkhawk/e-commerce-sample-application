import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CartChanges = createSlice({
  name: "changes",
  initialState: { value: 0, items: [] },
  reducers: {
    deleteItems(state, action) {
      axios.delete(action.payload);
    },
    editItems(state, action) {
      axios.put(action.payload.url, action.payload.product);
    },
    async getitems(state,action){
        // console.log(action.payload);
      const fetching=await axios.get(action.payload)
      return fetching.data
    //   state.items=[...fetching.data]
    //   console.log(state.items);
    },
    increment(state, action) {
      state.value += action.payload;
    },
  },
});
export const { deleteItems, editItems, getitems, increment } =
  CartChanges.actions;
export default CartChanges.reducer;
