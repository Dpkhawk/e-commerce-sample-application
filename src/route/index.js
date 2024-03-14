import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";

import SignUp from "../component/signup/signup-page";
import Products from "../component/products/products-page";
import DashBoard from "../component/home-page/dashboard";
import ForgotPassword from "../component/forgot-password/forgot-password";
import Footer from "../component/footer/footer";
import Cart from "../component/cart/cart";
import LoginForm from "../component/login2/login-form";
import ProductDetailView from "../component/products/product-detail-view";
import BoughtPage from "../component/bought-page/bought-page";

const Router = () => {
  const loggin=sessionStorage.getItem("userId")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/forgotpassword" element={<ForgotPassword />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/loginPage" element={<LoginForm />}/>
          <Route path="/product" element={<ProductDetailView />}/>
          <Route path="/boughtpage" element={<BoughtPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
