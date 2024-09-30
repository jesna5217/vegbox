import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const store=configureStore(
    {
        reducer:{
            cartReducer:cartSlice,
            wishlistReducer:wishlistSlice
        }
    }
)
export default store;