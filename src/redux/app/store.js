import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cardSlice";

// create store
 const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})
export default store;