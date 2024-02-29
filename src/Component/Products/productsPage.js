import { useEffect, useState } from "react";
import NavigationBar from "../HomePage/navigation-bar";
import ProductItemView from "./product-item-view";
import Footer from "../footer/footer";
export default function Products() {
  const [vegData, setVegData] = useState([]);
  const [filter, setFilter] = useState("fruits");
  useEffect(() => {
    fetch(`http://localhost:3001/${filter}`)
      .then((response) => response.json())
      .then((data) => setVegData([...data]));
  }, [filter]);
  return (
    <div className="displayProducts">
      <div className="block1">
        <NavigationBar />
      </div>
      <div className="block2">
        <div className="productsDisplay">
          {vegData.map((vegetables) => {
            return <ProductItemView products={vegetables} />;
          })}
        </div>
      </div>
      <div className="block3">
        <div className="searchFoodCategory">
          <p><b>Select Category</b></p>
          <select className="selectFilter" onChange={(e) => setFilter(e.target.value)}>
            <option selected value={"fruits"}>
              Fruits
            </option>
            <option value={"Vegetables"}>Vegetables</option>
            <option value={"Non-Veg"}>Meats and Eggs</option>
          </select>
          </div>
      </div>
      <div className="block4">
        <Footer />
      </div>
    </div>
  );
}
