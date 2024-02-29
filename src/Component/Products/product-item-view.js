import { useState } from "react";
export default function ProductItemView({products}) {
  const [productPrice, setProductPrice] = useState(products.price);
  const[discountPrice,setDiscountPrice]=useState(products.discount)
  const [weight, setWeight] = useState(1);
  function handleChange(weight) {
    setWeight(weight);
  }
  return (
    <div className="products" >
      <div>
        <img className="products-img" src={products.src} alt={products.name} />
      </div>
      <br />
      <p>
        <b>{products.name}</b>
      </p>
      <select
        className="products-select"
        onChange={(e) => handleChange(e.target.value)}
      >
        {products.quantity.map((values) => (
          <option value={values}>{values}kg</option>
        ))}
      </select>
      <p className="products-price" key={products.id}>
        <b>₹{weight * productPrice}</b> &nbsp;
        <strike>₹{weight * discountPrice}</strike>
      </p>
      <button className="products-button">Add to cart</button>
    </div>
  );
}
