import { useState } from "react";

export default function CartItemView({ products,setChange }) {
  const [weight, setWeight] = useState(products.kgs);

  function handleClick(id) {
    fetch(`http://localhost:3005/data/${id}`, {
      method: "DELETE",
    });
    setChange()
  }

  function handleChange(products) {
    fetch(`http://localhost:3005/data/${products.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...products, kgs: weight }),
    });
  }

  return (
    <>
      <div className="innerCart" key={products.id}>
        <img className="cartImage" src={products.src} alt="capsicum" />
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
          onChange={(e) => setWeight(e.target.value)}
        />
        <div key={products.id}>
          <p className="cartPrice" key={products.id}>
            {weight * products.price}
          </p>
        </div>
        <button
          className="buttonDelete"
          onClick={() => handleClick(products.id)}
        >
          Delete
        </button>
        <button className="buttonEdit" onClick={() => handleChange(products)}>
          Edit
        </button>
      </div>
    </>
  );
}
