import { useDispatch, useSelector } from "react-redux"
import  { decrement, increment } from "./redux"

const Main1=()=>{
    const value=useSelector(state=>state.cou.value)
    const dispatch=useDispatch()
    return(<>
    {console.log(value)}
    <button onClick={()=>dispatch(increment(2))}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>)
}
export default Main1

