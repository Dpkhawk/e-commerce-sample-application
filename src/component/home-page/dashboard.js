import {  useEffect, useState } from "react";


import NavigationBar from "./navigation-bar";
import ProductItemView from "../products/product-item-view";
import Footer from "../footer/footer";

export default function DashBoard() {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3004/homePage")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="items">
        {productData.map((products) => {
          return <ProductItemView products={products} key={products.id} />;
        })}
      </div>
      <Footer/>
    </>
  );
}

