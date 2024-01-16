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
        closeMenu: (state) => {
          state.isMenuOpen = false;
        },
 },
})
  export const {toggleMenu,closeMenu}= Sidebarslice.actions
  export default Sidebarslice.reducer 