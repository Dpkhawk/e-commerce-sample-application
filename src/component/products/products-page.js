import { useEffect, useState } from "react";
import React from "react";
import NavigationBar from "../home-page/navigation-bar";
import ProductItemView from "./product-item-view";
import Footer from "../footer/footer";
import ProductSideBar from "./product-side-bar";
import fetchData from "../services/fetching";

const Products = () => {
  const url = "http://localhost:3006/products";
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const result = await fetchData(url);
      setAllProducts([...result]);
      setFilterProducts([...result]);
    };
    fetching();
  }, []);

  const searchBar = (value) => {
    if (value === "") {
      setAllProducts(filterProducts);
    } else {
      const da = filterProducts.filter(
        (item)=>item.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setAllProducts(da);
    }
  };
  const handleFilter = (filter) => {
    if (filter === "all") {
      setAllProducts([...filterProducts]);
    } else {
      setAllProducts(
        filterProducts.filter((product) => product.category === filter)
      );
    }
  };

  const functionToCart = (obj) => {
    selectedItems.map((e, i) => {
      if (e.name === obj.name || e.price === 0) {
        selectedItems.splice(i, 1);
      }
    });
    setSelectedItems([...selectedItems, obj]);
  };
  const now = Date.now();
  return (
    <div className="displayProducts">
      <div className="block1">
        <NavigationBar
          value={true}
          setSearchItems={(value) => searchBar(value)}
        />
      </div>
      <div className="block2">
        <div className="productsDisplay">
          {allProducts.map((vegetables) => {
            return (
              <div key={vegetables.id}>
                <ProductItemView
                  product={vegetables}
                  key={vegetables.id}
                  functionToCart={(obj) => functionToCart(obj)}
                  id={now}
                />
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
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option selected value={"all"}>
              All
            </option>
            <option value={"vegetables"}>Vegetables</option>
            <option value={"fruits"}>Fruits</option>

            <option value={"meats"}>Meats and Eggs</option>
          </select>
        </div>
        <div className="orderedItems">
          <div>
            <b>Selected Products and their quantity:</b>
          </div>
          <ProductSideBar selectedItems={selectedItems} />
        </div>
      </div>
      <div className="block4">
        <Footer />
      </div>
    </div>
  );
};
export default Products;
