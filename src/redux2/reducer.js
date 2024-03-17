import { createSlice } from "@reduxjs/toolkit";

const Reducer=createSlice({
    name:"Object",
    initialState:{
        value:0
    },
    reducers:{
        totalValue:(state,action)=>{
            console.log(("inside"));
            state.value+=action.payload
        }
    }
})
export const{totalValue}=Reducer.actions
export default  Reducer.reducer