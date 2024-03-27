import { useEffect, useState } from "react"
import fetchData from "../services/fetching"

const OrderHistory=()=>{
  const[historyData,setHistorydata]=useState([])
  const apiUrl=process.env.RAECT_APP_HISTORY_ENDPOINT   
  useEffect(()=>{
    const fetching = async () => {
        const result = await fetchData(apiUrl);
        setHistorydata([...result])
      };
      fetching();
  },[])
  return(<div>
    {historyData.map(items=>{
       return( <div>
            {items.name}
            {items.price}
            {items.status}
        </div>)
    })}
  </div>)
}
export default OrderHistory