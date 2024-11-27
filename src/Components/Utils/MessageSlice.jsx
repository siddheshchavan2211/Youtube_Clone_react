import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    Message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.Message.splice(50, 1);
      state.Message.unshift(action.payload);
    },
  },
});
export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
