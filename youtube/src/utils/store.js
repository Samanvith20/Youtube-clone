import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";
import searchslice from "./searchslice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer:{
        app: sidebarslice,
        search:searchslice,
         chat:chatSlice
    }
})
 export default store