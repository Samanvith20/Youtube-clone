import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";
import searchslice from "./searchslice";


const store = configureStore({
    reducer:{
        app: sidebarslice,
        search:searchslice
    }
})
 export default store