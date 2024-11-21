import { configureStore } from "@reduxjs/toolkit";
import sideslice from "./sidebarslice";
import searchSlice from "../Utils/searchSlice";

const store = configureStore({
  reducer: {
    app: sideslice,
    searchincache: searchSlice,
  },
});
export default store;
