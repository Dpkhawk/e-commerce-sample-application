import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const CartChanges = createSlice({
  name: "changes",
  initialState: {  items: [] },
  reducers: {
    deleteItems(state, action) {
      axios.delete(action.payload);
    },
    editItems(state, action) {
      axios.put(action.payload.url, action.payload.product);
    },
    increment(state, action) {
      state.value += action.payload;
    }
}});

export const { deleteItems, editItems, increment } =
  CartChanges.actions;
export default CartChanges.reducer;
