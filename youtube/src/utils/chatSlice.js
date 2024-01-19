import { createSlice } from "@reduxjs/toolkit";
import { LIVE_OFFSET_MESSAGES } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
        const newMessage = action.payload;
         //  used to delete the older messages and update the latest messages
        state.messages = state.messages.slice(-LIVE_OFFSET_MESSAGES)
      
        // Add the new message
        state.messages.push(newMessage);
      },
      },
});

export const { addmessage } = chatSlice.actions;
export default chatSlice.reducer;
