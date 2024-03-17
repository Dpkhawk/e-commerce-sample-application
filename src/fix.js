import { useCallback,useState } from "react";
 
function Callback(){
    const [state,setState]= useState(0);
 
    function handleClick(){
        setState(state+1);
        callback()
    }
    function handleCallback(){
        console.log("usecallback has been called")
    }
    const callback = useCallback(()=>handleCallback(),[state])
return(
    <button onClick={handleClick}>click</button>
)
}
export default Callback