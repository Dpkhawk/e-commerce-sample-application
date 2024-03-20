// import axios from "axios";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { deleteItems } from "../reduxNew/reducer";
import { useDispatch, useSelector } from "react-redux";
const CartItemView = ({ products, handleInputChanges }) => {
  const [weight, setWeight] = useState(products.kgs);
  const value=useSelector(state=>state.cartValue.items);
  const dispatch = useDispatch();

  const handleClick = (products) => {
    // fetch(`http://localhost:3005/data/${id}`, {
    //   method: "DELETE",
    // });
    //  axios.delete(`http://localhost:3005/data/${id}`)
    axios.delete(`http://localhost:3005/data/${products.id}`)
    
    dispatch(deleteItems(products.id));
    // data.map((element, index) => {
    //   if (element.id === id) {
    //     console.log("delete");
    //     data.splice(index, 1);
    //   }
    // });

    // setCartData([...data]);
  };

  const handleChange = (products) => {
    //   fetch(`http://localhost:3005/data/${products.id}`, {
    //     method: "PUT",
    //     body: JSON.stringify({ ...products, kgs: weight }),
    //   });

    //  axios.put(`http://localhost:3005/data/${products.id}`,{

    // ...products,kgs:weight

    // })}
    axios.put(`http://localhost:3005/data/${products.id}`,{...products,kgs:weight})
    // dispatch(editItems({products:products,addedProduct:weight}))
    // dispatch(
    //   editItems({
    //     url: `http://localhost:3005/data/${products.id}`,
    //     product: { ...products, kgs: weight },
    //   })
    // );
  };
  const totalChange = (e) => {
    setWeight(e.target.value);
  };
  handleInputChanges(weight, products.price);

  return (
    <>
      <div className="innerCarts" key={products.id}>
        
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
    </>
  );
};
export default CartItemView;
