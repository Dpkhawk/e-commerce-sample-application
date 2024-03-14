import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import NavigationBar from "../home-page/navigation-bar";

import CartItemView from "./cart-items-view";
import useFetchData from "../data-fetching/fetching";
import fetchData from "../data-fetching/fetching";


const Cart = () => {
  const navigation=useNavigate()
  // if(!sessionStorage.getItem("userId")){
  //   navigation("/")
  // }
  const url="http://localhost:3005/data"
  const [cartData,setCartData] = useState([]);
  const [price, setPrice] = useState(0);
  var prices = 0;


  useEffect(()=>{
    const fetchdata=async ()=>{
      const result=await fetchData(url)
      setCartData(result.filter((items)=>items.userName===sessionStorage.getItem("userId")))
    }
   fetchdata()
  },[])
  
  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };
  const handleClick = () => {
    navigation('/boughtpage')
  }

  return (
    <>
      <div className="cartOuter">
        <div className="navContent">
          {" "}
          <NavigationBar />
        </div>
        <div className="mainContent">
         
          {cartData.map((product) => {
            return (
              <div>
                <CartItemView
                  products={product}
                  handleInputChanges={(weight, price) =>
                    handleInputChange(weight, price)
                  }
                  data={cartData}
                  setCartData={setCartData}
                />
              </div>
            );
          })}
          <button type="button" class="btn btn-success buyProducts" onClick={handleClick}>
            Buy Now
          </button>
          <p>
            {" "}
            <b>Total Price:</b>{" "}
            <input className="totalInput" value={price} disabled={true} />
          </p>
        </div>
        <div className="leftSideContent"></div>
        <div className="rightSideContent"></div>
      </div>
    </>
  );
};

export default Cart;
