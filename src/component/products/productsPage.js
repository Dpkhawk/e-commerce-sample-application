import { useEffect, useState } from "react";

import NavigationBar from "../home-page/navigation-bar";
import ProductItemView from "./product-item-view";
import Footer from "../footer/footer";

export default function Products() {
  const [vegData, setVegData] = useState([]);
  const [filter, setFilter] = useState("fruits");
  const[selectedItems,setSelectedItems]=useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/${filter}`)
      .then((response) => response.json())
      .then((data) => setVegData([...data]));
  }, [filter]);
  function functionToCart(obj){
    selectedItems.map((element)=>
    {
      Object.assign(element,obj)
      setSelectedItems([...selectedItems,element])
      if(Object.is(element.name,obj.name)){
        setSelectedItems([...selectedItems,element])
      }
      else{
        setSelectedItems([...selectedItems,obj])
      }
    })
    
  }
  return (
    <div className="displayProducts">
      <div className="block1">
        <NavigationBar />
      </div>
      <div className="block2">
        <div className="productsDisplay">
          {vegData.map((vegetables) => {
            return (
              <ProductItemView products={vegetables} key={vegetables.id} functionToCart={(obj)=>functionToCart(obj)} />
            );
          })}
        </div>
        {console.log(selectedItems)}
      </div>
      <div className="block3">
        <div className="searchFoodCategory">
          <p>
            <b>Select Category</b>
          </p>
          <select
            className="selectFilter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option selected value={"fruits"}>
              Fruits
            </option>
            <option value={"Vegetables"}>Vegetables</option>
            <option value={"Non-Veg"}>Meats and Eggs</option>
          </select>
        </div>
        <div className="orderedItems">
          <div><b>Selected Products and their quantity:</b></div>
          {selectedItems.map((element)=>{
            <div>Total Price: <input value={element.price} disabled/></div>
          return(<>
          <ul>
            <li>{element.name}  Kgs: <input value={element.kgs} disabled/> </li>
          </ul>
          </>)})}
        </div>
      </div>
      <div className="block4">
        <Footer />
      </div>
    </div>
  );
}
