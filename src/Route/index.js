import LoginPage from "../Component/Login/UserLogin";
import SignUp from "../Component/SignUp/sign-up-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Products from "../Component/Products/productsPage";
import DashBoard from "../Component/HomePage/dashboard";
import ForgotPassword from "../Component/ForgotPassword/ForgotPassword";
import { useState } from "react";
import Footer from "../Component/footer/footer";
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
