import CartChanges from "./cart-redux"

import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
      cartValue:CartChanges
    }
})
export default store