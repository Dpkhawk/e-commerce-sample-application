import { useEffect,  useState } from "react";

import NavigationBar from "../home-page/navigation-bar";
import ProductItemView from "./product-item-view";
import Footer from "../footer/footer";

export default function Products() {
  const [vegData, setVegData] = useState([]);
  const [filter, setFilter] = useState("fruits");
  const[selectedItems,setSelectedItems]=useState([{}])
  let price=0
  useEffect(() => {
    fetch(`http://localhost:3001/${filter}`)
      .then((response) => response.json())
      .then((data) => setVegData([...data]));
  }, [filter]);

  function functionToCart(obj){
    if(selectedItems===null)
    setSelectedItems([...selectedItems,obj]);
    selectedItems.map((e,i)=>{
    if((e.name===obj.name)){
        selectedItems.splice(i,1)
      }
      setSelectedItems([...selectedItems,obj])
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
              <div key={vegetables.id}>
              <ProductItemView products={vegetables} key={vegetables.id} functionToCart={(obj)=>functionToCart(obj)}  />
              </div>
            );
          })}
        </div>
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
          {selectedItems.map((element,i)=>{
            if(i===0)
             return null;
            price+=element.price;
          return(<>
          <ul>
            <li>{element.name}  Kgs: <input id="itemsSelected" value={element.kgs} disabled/>  Price:<input id="itemsSelected" value={element.price}  disabled/></li>
          </ul>
          </>)})}
          <div>Total Price: <input id="itemsSelected"  value={price} disabled/></div>
        </div>
      </div>
      <div className="block4">
        <Footer />
      </div>
    </div>
  );
}
