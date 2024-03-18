import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import NavigationBar from "../home-page/navigation-bar";
import React from "react";
import CartItemView from "./cart-items-view";
import fetchData from "../data-fetching/fetching";

const Cart = () => {
  const navigation = useNavigate();

  const url = "http://localhost:3005/data";
  const [cartData, setCartData] = useState([]);
  const [price, setPrice] = useState(0);
  // const totalPrice = useSelector((state) => state.cartValue.value);
  // const dispatch = useDispatch();
  var prices = 0;

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetchData(url);
      setCartData(
        result.filter(
          (items) => items.userName === sessionStorage.getItem("userId")
        )
      );
    };
    fetchdata();
    // dispatch(getitems(url))
    // console.log(items);
  }, []);
  // console.log(totalPrice);
  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };
  const handleClick = () => {
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
          {cartData.map((product) => {
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
