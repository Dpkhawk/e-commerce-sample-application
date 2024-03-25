
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  { deleteData, postData} from "../services/fetching";
import React from "react";
import { useSelector } from "react-redux";

const ProductItemView = ({ product, functionToCart, id }) => {
  const [weight, setWeight] = useState(1);
  const [cart, setCart] = useState(true);
  const values=useSelector(state=>state.cartValue.items)
  const [cartData, setCartdata] = useState(values);
  const apiURL=process.env.REACT_APP_DATA_URL
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
      if(weight<=0||weight>=10){
        alert("Quantity is not acceptable")
      }
     else{
    setCart(false);
    cartData.map((firstElement) => {
      if (
        cartProduct.name === firstElement.name &&
        sessionStorage.getItem("userId") === firstElement.userName
      ) {
        deleteData(`${apiURL}/${firstElement.id}`);
      }
    });

    const cartObject = {
      ...cartProduct,
      kgs: weight,
      userName: sessionStorage.getItem("userId"),
      id: `${id}`,
    };
    postData(apiURL, cartObject );}
  };

  const handleDetailView = (products) => {
    navigation("/product", { state: { id: products } });
  };
  return (
    <div className="products">
      <div className="productsChild" >
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
            key={product.id}
          />
          <p className="productsPrice">
            <b>₹{weight * product.price}</b> &nbsp;
            <strike>₹{weight * product.discount}</strike>
          </p>
          {cart ? (
            <button
              className="productsButton"
              disabled={!sessionStorage.getItem("userId")}
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
