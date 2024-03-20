import {   createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CartChanges = createSlice({
  name: "changes",
  initialState: { value:0,items:[] },
  reducers: {
    deleteItems(state, action) {
     state.items=state.items.filter((items)=>
     items.id!==action.payload   
   )
    },
    addingStateValue(state,action){
      state.items=[...action.payload]
    },
  }});

export const { deleteItems,addingStateValue } =
  CartChanges.actions;
export default CartChanges.reducer;
