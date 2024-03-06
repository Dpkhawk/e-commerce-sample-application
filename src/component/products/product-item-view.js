import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProductDetailView from "./product-detail-view";
import { DetailContext } from "../../route";

const ProductItemView = ({ products, functionToCart }) => {
  const [weight, setWeight] = useState(1);
  const [cart, setCart] = useState(true);

  const navigation = useNavigate();
  const handleChange = (e) => {
    setWeight(e.target.value);
    functionToCart({
      price: products.price * e.target.value,
      name: products.name,
      kgs: e.target.value,
    });
  };

  const handleClick = (cartProduct) => {
    setCart(false);
    const cartObject = { ...cartProduct, kgs: weight };
    fetch("http://localhost:3005/data", {
      method: "POST",
      body: JSON.stringify(cartObject),
    });
  };
  const handleDivClick = ({ products }) => {
    navigation("/detailview", { products: products });
  };
  return (
    <div className="products">
      <div className="productsChild" key={products.id}>
        <div>
          <img className="productsImg" src={products.src} alt={products.name} />
        </div>
        <br />
        <div className="productsContent">
          <p>
            <b>{products.name}</b>
          </p>
          <input
            type="number"
            className="inputQuantity"
            placeholder="Quantity"
            onChange={(e) => handleChange(e)}
            key={products.id}
          />
          <p className="productsPrice">
            <b>₹{weight * products.price}</b> &nbsp;
            <strike>₹{weight * products.discount}</strike>
          </p>

          {cart ? (
            <button
              className="productsButton"
              disabled={!sessionStorage.getItem("userId")}
              onClick={() => handleClick(products)}
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
