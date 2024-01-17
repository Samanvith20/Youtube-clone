import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
     name:"search",
     initialState:{},
     reducers:{
         updatecache:(state,action)=>{
            state = Object.assign(state, action.payload);
         }
     }
})
  export const {updatecache} = searchslice.actions
 export default searchslice.reducer