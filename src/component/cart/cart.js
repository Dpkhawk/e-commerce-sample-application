import { useEffect, useState } from "react";

import NavigationBar from "../home-page/navigation-bar";

import CartItemView from "./cart-items-view";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [change, setChange] = useState(true);
  const [price, setPrice] = useState(0);
  var prices = 0;
  var value=[];
  const navigation=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3005/data")
      .then((respone) => respone.json())
      .then((data) => 
      setCartData([...data])
      );
      
  }, [change]);
  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };

  const handleClick=()=>{
     navigation('/boughtpage')
  }
    {value=cartData.filter((object)=>object.userName===sessionStorage.getItem("userId"))}
  return (
    <>
      <div className="cartOuter">
        <div className="navContent">
          {" "}
          <NavigationBar />
        </div>
        <div className="mainContent">
          {value.map((product) => {
            return (
              <div>
                <CartItemView
                  products={product}
                  change={change}
                  setChange={() => setChange(!change)}
                  handleInputChanges={(weight, price) =>
                    handleInputChange(weight, price)
                  }
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
