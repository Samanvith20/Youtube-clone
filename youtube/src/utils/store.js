import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";


const store = configureStore({
    reducer:{
        app: sidebarslice
    }
})
 export default store