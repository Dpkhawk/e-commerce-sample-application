import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../data-fetching/fetching";
import React from "react";

const ProductItemView = ({ product, functionToCart, id }) => {
  const [weight, setWeight] = useState(1);
  const [cart, setCart] = useState(true);
  const [cartData, setCartdata] = useState([]);
  const navigation = useNavigate();
  const url = "http://localhost:3005/data";

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetchData(url);
      setCartdata([...result]);
    };
    fetchdata();
  }, []);

  const handleChange = (e) => {
    setWeight(e.target.value);
    functionToCart({
      price: product.price * e.target.value,
      name: product.name,
      kgs: e.target.value,
    });
  };

  const handleClick = (cartProduct) => {
    setCart(false);
    cartData.map((firstElement) => {
      if (
        cartProduct.name === firstElement.name &&
        sessionStorage.getItem("userId") === firstElement.userName
      ) {
        axios.delete(`http://localhost:3005/data/${firstElement.id}`);
      }
    });

    const cartObject = {
      ...cartProduct,
      kgs: weight,
      userName: sessionStorage.getItem("userId"),
      id: `${id}`,
    };
    // fetch("http://localhost:3005/data", {
    //   method: "POST",
    //   body: JSON.stringify(cartObject),
    // })
    axios.post("http://localhost:3005/data", { ...cartObject });
  };

  const handleDetailView = (products) => {
    navigation(`/product`, { state: { id: products } });
  };
  return (
    <div className="products">
      <div className="productsChild" key={product.id}>
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
