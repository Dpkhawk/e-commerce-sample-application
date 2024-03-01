import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";


import LoginPage from "../component/login/UserLogin";
import SignUp from "../component/signup/sign-up-page";
import Products from "../component/products/productsPage";
import DashBoard from "../component/home-page/dashboard";
import ForgotPassword from "../component/forgot-password/ForgotPassword";
import Footer from "../component/footer/footer";

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
          <Route
            path="/loginPage"
            element={<LoginPage />}
          ></Route>
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
          <Route path='/footer' element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}