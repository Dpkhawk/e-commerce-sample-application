import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import React from "react";
import CartItemView from "./cart-items-view";
import fetchData, { postData } from "../services/fetching";
import { useDispatch, useSelector } from "react-redux";
import { addingStateValue, deleteItems } from "../redux/reducer";
import { deleteData } from "../services/fetching";

const Cart = () => {
  const navigation = useNavigate();

  const apiUrl = process.env.REACT_APP_CARTDATA_ENDPOINT;
  const historyURL = process.env.REACT_APP_HISTORY_ENDPOINT;
  const [price, setPrice] = useState(0);
  const totalItems = useSelector((state) => state.cartValue.items);
  const dispatch = useDispatch();
  let prices = 0;
  // console.log(apiUrl);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetchData(apiUrl);
      dispatch(addingStateValue(result));
    };
    fetchdata();
  }, []);

  const handleInputChange = (weight, totalPrice) => {
    prices += weight * totalPrice;
    setPrice(prices);
  };
  const todayDate = new Date().getDate();
  const month = new Date().getMonth();
  const handleClick = () => {
    totalItems.map((item) => {
      dispatch(deleteItems(item.id));
      postData(historyURL, {
        name:item.name,src:item.src,price:item.price,discount:item.discount,category:item.category,kgs:item.kgs,userName:item.userName,
        date: { todayDate: todayDate, month: month },
      });
      console.log(item);
      deleteData(`${apiUrl}/${item._id}`);
    });
    sessionStorage.setItem("bought", true);
    navigation("/boughtpage");
  };
  return (
    <div className="cartOuter">
      <div className="navContent">
        {" "}
        <Outlet />
      </div>
      <div className="mainContent">
        {totalItems.map((product) => {
          return (
            <div key={product.id}>
              <CartItemView
                products={product}
                handleInputChanges={(weight, price) =>
                  handleInputChange(weight, price)
                }
                url={apiUrl}
              />
            </div>
          );
        })}
        <button
          disabled={totalItems.length === 0}
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
  );
};

export default Cart;
