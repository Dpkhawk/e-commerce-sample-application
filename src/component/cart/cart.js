import { useEffect, useState } from "react";


import CartItemView from "./cart-items-view";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const[price,setPrice]=useState(0);
  const[change,setChange]=useState(true)
  let prices=0
  useEffect(() => {
    fetch("http://localhost:3005/data")
      .then((respone) => respone.json())
      .then((data) => setCartData([...data]));
  }, [change]);
  function handleClick() {
    cartData.map((product)=>
    setPrice(p=>p+(product.kgs*product.price)))
    //  prices+=(product.kgs*product.price))
    
    alert('You\'ve bought products worth of '+price)
    // prices=0;
  }
  return (
    <>
      <div className="cartOuter">
        <div className="mainContent">
          {cartData.map((product) => {
            return (
              <div>
                <CartItemView products={product} change={change} setChange={()=>setChange(!change)} />
              </div>
            );
          })}
         <button className="buyProducts" onClick={handleClick}>Buy Now</button>
        </div>
        <div className="leftSideContent"></div>
        <div className="rightSideContent"></div>
      </div>
    </>
  );
}
