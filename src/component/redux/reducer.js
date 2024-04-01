import { createSlice } from "@reduxjs/toolkit";

const CartChanges = createSlice({
  name: "changes",
  initialState: { value:'', items: [],searchBar:false },
  reducers: {
    deleteItems(state, action) {
      state.items = state.items.filter((items) => items.id !== action.payload);
    },
    addingStateValue(state, action) {
      state.items=action.payload.filter(items=>items.userName===sessionStorage.getItem("userId"))
    },
    searchItems(state,action){
      state.value=action.payload
    },
    changeSearchbar(state,action){
       state.searchBar=action.payload
    }
  },
});
export const { deleteItems, addingStateValue,searchItems,changeSearchbar } = CartChanges.actions;
export default CartChanges.reducer;
