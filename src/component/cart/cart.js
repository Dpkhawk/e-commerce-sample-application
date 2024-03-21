import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import NavigationBar from "../home-page/navigation-bar";
import React from "react";
import CartItemView from "./cart-items-view";
import fetchData from "../services/fetching";
import { useDispatch, useSelector } from "react-redux";
import { addingStateValue } from "../redux/reducer";

const Cart = () => {
  const navigation = useNavigate();

  const url = "http://localhost:3005/data";
  const [price, setPrice] = useState(0);
  const totalItems = useSelector((state) => state.cartValue.items);
  const dispatch = useDispatch();
  let prices = 0;

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetchData(url);
      dispatch(addingStateValue(result));
    };
    fetchdata();
  }, []);

  const filteredValues = totalItems.filter(
    (items) => items.userName === sessionStorage.getItem("userId")
  );
  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };
  const handleClick = () => {
    sessionStorage.setItem("bought", true);
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
                />
              </div>
            );
          })}
          <button
            disabled={filteredValues.length === 0}
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
