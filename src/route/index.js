import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

import SignUp from "../component/signup/signup-page";
import Products from "../component/products/products-page";
import DashBoard from "../component/home-page/dashboard";
import ForgotPassword from "../component/forgot-password/forgot-password";
import Footer from "../component/footer/footer";
import Cart from "../component/cart/cart";
import LoginForm from "../component/login2/login-form";
import ProductDetailView from "../component/products/product-detail-view";
import BoughtPage from "../component/bought-page/bought-page";

export const LevelContext = createContext();
const Router = () => {
  const [searchItems, setSearchItems] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              
                <DashBoard />
              
            }
          ></Route>
          {/* <Route
            path="/loginPage"
            element={<LoginPage />}
          ></Route> */}
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route
            path="/products"
            element={
              
                <Products />
              
            }
          >
            <Route path=":id"></Route>
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/loginPage" element={<LoginForm />} />
          {/* <Route path="/product" element={<ProductDetailView />} /> */}
          <Route path="/boughtpage" element={<BoughtPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
