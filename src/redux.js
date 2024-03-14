import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"



const Redux=()=>{
    const initialValue={value:0,}
    // const dispatch=useDispatch()
const increment=(state=initialValue,action)=>{
   if(action.type==='add'){
     return "1"
    
  }
  // else{
  //   return state
  // }
  console.log(action.type);
  // return 9;

}
const red=()=>{
    return{type:"add"}
}
const store=configureStore({reducer:increment})
store.dispatch(red())
console.log(store.getState());

    return(<button onClick={()=>store.dispatch(red())}>{store.getState()}</button>)
}
export default Redux
