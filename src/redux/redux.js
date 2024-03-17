import {  createSlice } from "@reduxjs/toolkit"




const Redux=createSlice({
   name:"c",
   initialState:{
    value:0,
    count:1
   },
   reducers:{
     increment:(state,action)=>{
        console.log(action.type);
        console.log(state.value);
       state.value+=action.payload
     },
     decrement:state=>{
       state.value-=1
     }
   }
})
export const {increment,decrement}=Redux.actions
// console.log(Redux.actions);
// console.log(Redux.reducer);
export default Redux.reducer