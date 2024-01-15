import { createSlice } from "@reduxjs/toolkit";

 const Sidebarslice= createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers: {
        toggleMenu: (state) => {
          state.isMenuOpen = !state.isMenuOpen;
         // if state.isMenuOpen is true, !state.isMenuOpen evaluates to false. If state.isMenuOpen is false, !state.isMenuOpen evaluates to true.
        },
 },
})
  export const {toggleMenu}= Sidebarslice.actions
  export default Sidebarslice.reducer 