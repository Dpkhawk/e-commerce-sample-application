import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CartChanges=createSlice({
    name:"changes",
    initialState:{value:0},
    reducers:{
        deleteItems(state,action){
          axios.delete(action.payload)
        },
        editItems(state,action){
            axios.put(action.payload.url,action.payload.product)
        }
    }
})
export const {deleteItems,editItems}=CartChanges.actions
export default CartChanges.reducer






