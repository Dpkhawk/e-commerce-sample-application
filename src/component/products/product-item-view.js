import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProductDetailView from "./product-detail-view";
import { DetailContext } from "../../route";

const ProductItemView = ({ products, functionToCart, id }) => {
  const [weight, setWeight] = useState(1);
  const [cart, setCart] = useState(true);
 const[cartData,setCartdata]=useState([])
  const navigation = useNavigate();
 useEffect(()=>{
  fetch("http://localhost:3005/data")
  .then(response=>response.json())
  .then(data=>setCartdata([...data]))
 },[])

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
    cartData.map((firstElement)=>{
      
      if(((cartProduct.name===firstElement.name)&&(sessionStorage.getItem("userId")===firstElement.userName))){
        
        fetch(`http://localhost:3005/data/${firstElement.id}`,{
          method:"DELETE",
        });}})
     
    
    const cartObject = {
      ...cartProduct,
      kgs: weight,
      userName: sessionStorage.getItem("userId"),
      id:`${id}`
    };
    console.log("ELSE");
    fetch("http://localhost:3005/data", {
      method: "POST",
      body: JSON.stringify(cartObject),
    })
  }

  const handleDetailView = () => {
    navigation(`/products`, { state: { id: products.id } });
  };
  return (
    <div className="products">
      <div
        className="productsChild"
        key={products.id}
        onClick={() => handleDetailView()}
      >
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
}
export default ProductItemView
