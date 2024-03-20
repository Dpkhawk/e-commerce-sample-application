import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import NavigationBar from "../home-page/navigation-bar";
import React from "react";
import CartItemView from "./cart-items-view";
import fetchData from "../data-fetching/fetching";
import { useDispatch, useSelector } from "react-redux";
import { addingStateValue } from "../reduxNew/reducer";

const Cart = () => {
  const navigation = useNavigate();

  const url = "http://localhost:3005/data";
  const [cartData, setCartData] = useState([]);
  const [price, setPrice] = useState(0);
  const totalPrice = useSelector((state) => state.cartValue.items);
  const dispatch = useDispatch();
  var prices = 0;

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetchData(url);
      dispatch(addingStateValue(result))
      // setCartData(
      //   result.filter(
      //     (items) => items.userName === sessionStorage.getItem("userId")
      //   )
      // );
    };
    fetchdata();
  }, []);

  const filteredValues=totalPrice.filter(
    (items) => items.userName === sessionStorage.getItem("userId")
  )
  console.log(filteredValues);
  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };
  const handleClick = () => {
    sessionStorage.setItem("bought",true);
    navigation("/boughtpage");
  };

  return (
    <>
      <div className="cartOuter">
        <div className="navContent">
          {" "}
          <NavigationBar />
        </div>
        <div className="mainContent">
          {filteredValues.map((product) => {
            return (
              <div key={product.id}>
                <CartItemView
                  products={product}
                  handleInputChanges={(weight, price) =>
                    handleInputChange(weight, price)
                  }
                  data={cartData}
                  setCartData={setCartData}
                />
                {/* { dispatch(increment(product.price))} */}
              </div>
            );
          })}
          <button
            disabled={cartData.length===0}
            type="button"
            className="btn btn-success buyProducts"
            onClick={handleClick}
          >
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
