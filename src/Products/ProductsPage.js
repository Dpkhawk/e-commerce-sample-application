import { useEffect, useState } from 'react'
import NavigationBar from '../HomePage/Navigation'
import './Product.css'
export default function Products(){
  let[vegData,setVegData]=useState([])
  
   useEffect(()=>{
    fetch("http://localhost:3001/Vegetables")
    .then(response=>response.json())
    .then(data=>setVegData([...data]))
  },[])
  return(<div className='displayProducts'>
    <div className="block1"><NavigationBar/></div>
    <div className="block2">
    <div className='productsDisplay'>
    {vegData.map((vegetables)=>{
      return(<>
      <div className='productSpacing'>    
           <div className='products'>
        <div><img className="products-img" src={vegetables.src}/></div><br/>
        <p><b>{vegetables.name}</b></p>
        <select className='products-select'>
          {vegetables.quantity.map((values1,index)=>{return(<option value={values1} key={index}>{values1}</option>)})}
        </select>
        <p className='products-price'><b>₹{vegetables.price}</b> &nbsp;<strike>₹{vegetables.discount}</strike></p>
        <button className='products-button'>Add to cart</button>
     </div>
        </div>
    </>)})}</div></div><div className="block3"></div>
          </div> )
}