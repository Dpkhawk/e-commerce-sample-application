import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer"

const store=configureStore({
    reducer:{
        valu:Reducer
    }
})
export default store