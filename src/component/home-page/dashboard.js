import { useEffect, useState } from "react";


import NavigationBar from "./navigation-bar";
import ProductItemView from "../products/product-item-view";
import Footer from "../footer/footer";
import Cart from "../../assests/cart.jpeg"
import { useNavigate } from "react-router";
export default function DashBoard() {
  const [productData, setProductData] = useState([]);
  const navigation = useNavigate()
  useEffect(() => {
    fetch("http://localhost:3004/homePage")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);
  const handleClick = () => {
    navigation('/products')
  }
  return (
    <>
      <NavigationBar />
      {/* <div className="items">
        {productData.map((products) => {
          return <ProductItemView products={products} key={products.id} />;
        })}
      </div> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Cart} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">

              <button type="button" class="btn btn-success" onClick={handleClick}>View Products</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Cart} alt="Second slide" />

            <div class="carousel-caption d-none d-md-block">
              <button type="button" class="btn btn-success" onClick={handleClick}>View Products</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Cart} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">

              <button type="button" class="btn btn-success" onClick={handleClick}>View Products</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

