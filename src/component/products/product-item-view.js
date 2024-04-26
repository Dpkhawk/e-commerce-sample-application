import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteData, postData, putData } from "../services/fetching";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatingItems } from "../redux/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItemView = ({ product, functionToCart, id }) => {
  const [weight, setWeight] = useState(1);
  const [cart, setCart] = useState(true);
  const dispatch=useDispatch()
  let putdata=false;
  const cartData = useSelector((state) => state.cartValue.items);
  const apiURL = process.env.REACT_APP_CARTDATA_ENDPOINT;
  const navigation = useNavigate();
  const handleChange = (e) => {
    setWeight(e.target.value);
    functionToCart({
      price: product.price * e.target.value,
      name: product.name,
      kgs: e.target.value,
    });
  };
  const handleClick = (cartProduct) => {
    if (weight <= 0 || weight >= 10) {
      toast.error("Quantity is not acceptable");
    } else {
      setCart(false);
      cartData.map((firstElement) => {
        if (
          !putdata&&
          cartProduct.name === firstElement.name &&
          sessionStorage.getItem("userId") === firstElement.userName
        ) {
          
          putData(`${apiURL}/${firstElement._id}`,{kgs: weight,});
          putdata=true
          dispatch(updatingItems({id:firstElement._id,kgs:weight}))
        }
      });
     
     if(!putdata){
      const cartObject = {
        ...cartProduct,
        kgs: weight,
        userName: sessionStorage.getItem("userId"),
      };
      postData(apiURL, cartObject);
     
     }
     
     
}
    
  };

  const handleDetailView = (products) => {
    navigation("/product", { state: { id: products } });
  };
  return (
    <div className="products">
      <div className="productsChild">
        <div>
          <img
            className="productsImg"
            src={product.src}
            alt={product.name}
            onClick={() => handleDetailView(product)}
          />
        </div>
        <br />
        <div className="productsContent">
          <p>
            <b>{product.name}</b>
          </p>
          <input
            type="number"
            className="inputQuantity"
            placeholder="Quantity"
            onChange={(e) => handleChange(e)}
            min={1}
            max={9}
          />
          <p className="productsPrice">
            <b>₹{weight * product.price}</b> &nbsp;
            <strike>₹{weight * product.discount}</strike>
          </p>
          {cart ? (
            <button
              className="productsButton"
              disabled={
                !sessionStorage.getItem("userId") || weight <= 0 || weight >= 10
              }
              onClick={() => handleClick(product)}
            >
              Add to cart
            </button>
          ) : (
            <button className="productsAdded">Added</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItemView;
