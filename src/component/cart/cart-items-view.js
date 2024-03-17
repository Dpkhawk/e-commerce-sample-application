import axios from "axios";
import { useState } from "react";
import { deleteItems,editItems } from "../reduxNew/cart-redux";
import { useDispatch } from "react-redux";
const CartItemView = ({ products, handleInputChanges,data,setCartData }) => {
  const [weight, setWeight] = useState(products.kgs);
  const dispatch=useDispatch()

  const handleClick = (id) => {
    // fetch(`http://localhost:3005/data/${id}`, {
    //   method: "DELETE",
    // });
    //  axios.delete(`http://localhost:3005/data/${id}`)
    dispatch(deleteItems(`http://localhost:3005/data/${id}`))
     data.map((element,index)=>{
      if(element.id===id){
        console.log('delete');
        data.splice(index,1)
      }
     })
     
     setCartData([...data])
  }

  const handleChange = (products) => {
  //   fetch(`http://localhost:3005/data/${products.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ ...products, kgs: weight }),
  //   });
  
    //  axios.put(`http://localhost:3005/data/${products.id}`,{
    
        // ...products,kgs:weight
      
    // })}
    dispatch(editItems({url:`http://localhost:3005/data/${products.id}`,product:{ ...products,kgs:weight}}))
  }
  const totalChange = (e) => {
    setWeight(e.target.value);
  };
  handleInputChanges(weight, products.price)

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
            class="btn btn-danger buttonDelete"
            onClick={() => handleClick(products.id)}
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-warning buttonEdit"
            onClick={() => handleChange(products)}
          >
            Edit
          </button>{" "}
        </div>
      </div>
    </>
  );
}
export default CartItemView
