import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import SignUp from "../component/signup/signup-page";
import Products from "../component/products/products-page";
import DashBoard from "../component/home-page/dashboard";
import ForgotPassword from "../component/forgot-password/forgot-password";
import Cart from "../component/cart/cart";
import LoginForm from "../component/login/login-form";
import ProductDetailView from "../component/products/product-detail-view";
import BoughtPage from "../component/bought-page/bought-page";
import PrivateRoute from "../component/private-route/private-route";
import NavigationBar from "../component/home-page/navigation-bar";
import NestedLayout from "../component/nested-route/nested-layout";
import OrderHistory from "../component/order-history/order-history";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NestedLayout>
              <DashBoard />
            </NestedLayout>
          }
        />
        <Route
          path="/SignUp"
          element={
            <PrivateRoute value={"beforeLogin"}>
              <SignUp />
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <NestedLayout>
              <Products />
            </NestedLayout>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        >
          <Route path="/cart" element={<NavigationBar />} />
        </Route>
        <Route
          path="/orderhistory"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        >
          <Route path="/orderhistory" element={<NavigationBar />} />
        </Route>

        <Route
          path="/loginPage"
          element={
            <PrivateRoute value={"beforeLogin"}>
              <LoginForm />
            </PrivateRoute>
          }
        />
        <Route path="/product" element={<ProductDetailView />} />
        <Route
          path="/boughtpage"
          element={
            <PrivateRoute value={"success"}>
              <BoughtPage />
            </PrivateRoute>
          }
        >
          <Route path="/boughtpage" element={<NavigationBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
