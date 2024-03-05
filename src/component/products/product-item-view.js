import {  useEffect, useState } from "react";


export default function ProductItemView({products,functionToCart}) {

  const [weight, setWeight] = useState(1);
  const[cart,setCart]=useState(true);
  const[cartItems,setCartItems]=useState()
  // useEffect(()=>{
  //   fetch("http://localhost:3005/data")
  //   .then(response=>response.json())
  //   .then(data=>setCartItems([...data]))
  // },[])

  function handleChange(e){
       setWeight(e.target.value);
       functionToCart({price:products.price*e.target.value,name:products.name,kgs:e.target.value}) 
  }

  function handleClick(cartProduct){
    setCart(false)
    const cartObject={...cartProduct,kgs:weight}
    // console.log(cartItems);
    // if(cartItems===Array){
    //   fetch("http://localhost:3005/data",{
    //     method:"POST",
    //     body:JSON.stringify(cartObject)
    //    })
    // }
    // else{
    //   cartItems.map((currentProduct)=>{
    //     if(currentProduct.id===cartProduct.id){
    //       fetch(`http://localhost:3005/data/${cartProduct.id}`,{
    //   method:"PUT",
    //   body:JSON.stringify(cartObject)
    //  })
    //     }
    //   })
    // }
    // const cartObject={...cartProduct,kgs:weight}
     fetch("http://localhost:3005/data",{
      method:"POST",
      body:JSON.stringify(cartObject)
     })
     
  }

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
      <input type="number" className="inputQuantity" placeholder="quantity" onChange={(e)=>handleChange(e)} key={products.id} />
      <p className="productsPrice"  >
        <b>₹{weight* products.price}</b> &nbsp;
        <strike>₹{ weight *products.discount}</strike>
      </p>
      {cart?<button className="productsButton"   onClick={()=>handleClick(products)} >Add to cart</button>:<button className="productsAdded">Added</button>}
      </div>
    </div>
    </div>
  );
}
