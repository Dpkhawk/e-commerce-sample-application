import { useEffect, useState } from "react"


const useFetchData=  (url)=>{
//     const fetching=async  (url)=>{
//       const data=await fetch(url)
//       const response=await data.json()
//       return response;
//     }
//    const values=await  fetching(url)
//    return values
   
const[data,setData]=useState([])
// useEffect(()=>{
//     fetch(url)
//     .then(response=>response.json())
//     .then(data=>setData([...data]))
// },[])
// return data
function fetching(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>setData([...data]))
    return data
}
useEffect(()=>{
    const fetch=fetching()
    .then(res=>console.log(res))
    console.log(fetch);
},[])
// const resp=await fetching()
}
export default useFetchData