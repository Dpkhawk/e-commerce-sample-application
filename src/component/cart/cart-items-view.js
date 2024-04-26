import { useState, useMemo } from "react";
import React from "react";
import { deleteItems } from "../redux/reducer";
import { useDispatch } from "react-redux";
import { deleteData, putData } from "../services/fetching";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItemView = ({ products, handleInputChanges, url }) => {
  const [weight, setWeight] = useState(products.kgs);
  const dispatch = useDispatch();

  const handleClick = (products) => {
    deleteData(`${url}/${products._id}`)
      .then(() => dispatch(deleteItems(products._id)))
      .catch(() => toast.success("Something Is Wrong"));
  };

  const handleChange = (products) => {
    if (weight <= 0 || weight >= 10) {
      toast.error("Quantity is not acceptable");
    } else {
      putData(`${url}/${products._id}`, {
        kgs: weight,
      })
        .then(() => toast.success("Items Edited Successfully"))
        .catch(() => toast.error("Something Is Wrong"));
    }
  };
  const totalChange = (e) => {
    setWeight(e.target.value);
  };
  useMemo(() => handleInputChanges(weight, products.price), [weight]);

  return (
    <div className="innerCarts">
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
        min={1}
        max={9}
      />
      <div>
        <p className="cartPrice">{weight * products.price}</p>
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
