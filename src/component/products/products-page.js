import { useEffect, useMemo, useState } from "react";
import React from "react";
import ProductItemView from "./product-item-view";
import ProductSideBar from "./product-side-bar";
import fetchData from "../services/fetching";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchbar } from "../redux/reducer";

const Products = () => {
  const apiUrl2 = process.env.REACT_APP_PRODUCT_ENDPOINT;
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filters, setFilter] = useState("all");
  useEffect(() => {
    // const fetching = async () => {
      
    //   const result = await fetchData(apiUrl2);
    //   setAllProducts([...result]);
    //   setFilterProducts([...result]);
    // };
    // fetching();
    dispatch(changeSearchbar(true));
    return () => {
      dispatch(changeSearchbar(false));
    };
  }, []);
  const value = useSelector((state) => state.cartValue.value);
  const searchBar = async (searchItems) => {
    if (searchItems === "") {
      handleFilter(filters);
    } else {
      // const data=await fetchData(`${apiUrl2}/${ori+values.slice(1,values.length)}`)
      // const data = filterProducts.filter((item) =>
      //   filters === "all"
      //     ? item.name.toLowerCase().includes(searchItems.toLowerCase())
      //     : item.name.toLowerCase().includes(searchItems.toLowerCase()) &&
      //       item.category === filters
      // );
      // setFilterProducts()
      
      setAllProducts(filterProducts.filter((item)=>item.name.toLowerCase().includes(value)));
    }
  };

  const handleFilter = async (filter) => {
    setFilter(filter);
    if (filter === "all") {
      const result=await fetchData(apiUrl2)
      // setAllProducts([...filterProducts]);
      setFilterProducts([...result])
      setAllProducts([...result])
    } else {
      const result=await fetchData(`${apiUrl2}/${filter}`)
      // setAllProducts(
      //   result.filter((product) => product.category === filter)
      // );
      setFilterProducts([...result])
      setAllProducts(result)
    }
  };
  useMemo(() => searchBar(value), [value]);

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
      <div className="block1"> </div>
      <div className="block2">
        <div className="productsDisplay">
          {allProducts.length === 0 ? (
            <h3>No Products Available</h3>
          ) : (
            allProducts.map((vegetables) => {
              return (
                <div key={vegetables.id}>
                  <ProductItemView
                    product={vegetables}
                    functionToCart={(obj) => functionToCart(obj)}
                    id={now}
                  />
                </div>
              );
            })
          )}
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
      <div className="block4"></div>
    </div>
  );
};
export default Products;
