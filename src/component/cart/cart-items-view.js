import { useState } from "react";
import React from "react";
import axios from "axios";
import { deleteItems } from "../redux/reducer";
import { useDispatch } from "react-redux";
const CartItemView = ({ products, handleInputChanges }) => {
  const [weight, setWeight] = useState(products.kgs);
  const dispatch = useDispatch();

  const handleClick = (products) => {
    axios.delete(`http://localhost:3005/data/${products.id}`)
   .then(()=>alert("items deleted successfully"))
   .catch(()=>alert("something is wrong"))
    dispatch(deleteItems(products.id));
  };

  const handleChange = (products) => {
    axios.put(`http://localhost:3005/data/${products.id}`, {
      ...products,
      kgs: weight,
    })
    .then(()=>alert("items edited successfully"))
   .catch(()=>alert("something is wrong"))
  };
  const totalChange = (e) => {
    setWeight(e.target.value);
  };
  handleInputChanges(weight, products.price);

  return (
      <div className="innerCarts" >
        <img className="cartImage" src={products.src} alt={products.name} />
        <div className="cartPriceDiscount">
          <p>{products.name}</p>
          <p>
            <b>₹{products.price}</b>
          </p>
        </div>

        <input
          className="cartInput"
          type="number"
          value={weight}
          onChange={(e) => totalChange(e, products.price)}
        />
        <div key={products.id}>
          <p className="cartPrice" key={products.id}>
            {weight * products.price}
          </p>
        </div>
        <div className="cartButtons">
          <button
            type="button"
            className="btn btn-danger buttonDelete"
            onClick={() => handleClick(products)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-warning buttonEdit"
            onClick={() => handleChange(products)}
          >
            Edit
          </button>{" "}
        </div>
      </div>
  );
};
export default CartItemView;
