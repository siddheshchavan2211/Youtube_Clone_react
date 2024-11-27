import { configureStore } from "@reduxjs/toolkit";
import sideslice from "./sidebarslice";
import searchSlice from "../Utils/searchSlice";
import messageSlice from "../Utils/MessageSlice";
const store = configureStore({
  reducer: {
    app: sideslice,
    searchincache: searchSlice,
    message: messageSlice,
  },
});
export default store;
