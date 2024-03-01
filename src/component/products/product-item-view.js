import { useContext, useState } from "react";
import { LevelContext } from "../../route";


export default function ProductItemView({products,functionToCart}) {
  const [weight, setWeight] = useState(1);
  const value=useContext(LevelContext)
  function handleChange(e){
       setWeight(e.target.value);
       functionToCart({price:products.price*e.target.value,name:products.name,kgs:e.target.value}) 
  }
  return (
    <div className="products" key={products.id}>
      <div>
        <img className="products-img" src={products.src} alt={products.name} />
      </div>
      <br />
      <p>
        <b>{products.name}</b>
      </p>
      <input type="number" className="inputQuantity" placeholder="enter the quantity in kgs" onChange={(e)=>handleChange(e)} key={products.id} />
      <p className="products-price"  >
        <b>₹{weight* products.price}</b> &nbsp;
        <strike>₹{ weight *products.discount}</strike>
      </p>
      <button className="products-button">Add to cart</button>
    </div>
  );
}
