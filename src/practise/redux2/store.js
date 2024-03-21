import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
// import React from "react";
const store = configureStore({
  reducer: {
    valu: Reducer,
  },
});
export default store;
