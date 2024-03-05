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


export const LevelContext = createContext();

export default function Router() {
  const [searchItems, setSearchItems] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LevelContext.Provider
                value={{
                  searchItemsValue: { searchItems },
                  setSearchItemsFunction: { setSearchItems },
                }}
             >
                <DashBoard />
              </LevelContext.Provider>
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
              <LevelContext.Provider
                value={{
                  searchItemsValue: { searchItems },
                  setSearchItemsFunction: { setSearchItems },
                }}
              >
                <Products />
              </LevelContext.Provider>
            }
          ></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
          <Route path='/loginPage' element={<LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
