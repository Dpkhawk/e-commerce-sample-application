import {  useState } from "react";


export default function ProductItemView({products,functionToCart}) {

  const [weight, setWeight] = useState(1);
  const[cart,setCart]=useState(true);


  function handleChange(e){
       setWeight(e.target.value);
       functionToCart({price:products.price*e.target.value,name:products.name,kgs:e.target.value}) 
  }

  function handleClick(cartProduct){
    setCart(false)
    const cartObject={...cartProduct,kgs:weight}
     fetch("http://localhost:3005/data",{
      method:"POST",
      body:JSON.stringify(cartObject)
     })
     
  }

  return (
    <div className="products" key={products.id}>
      <div>
        <img className="productsImg" src={products.src} alt={products.name} />
      </div>
      <br />
      <p>
        <b>{products.name}</b>
      </p>
      <input type="number" className="inputQuantity" placeholder="enter the quantity in kgs" onChange={(e)=>handleChange(e)} key={products.id} />
      <p className="productsPrice"  >
        <b>₹{weight* products.price}</b> &nbsp;
        <strike>₹{ weight *products.discount}</strike>
      </p>
      {cart?<button className="productsButton"   onClick={()=>handleClick(products)} >Add to cart</button>:<button className="productsAdded">Added</button>}
    </div>
  );
}
