import { createSlice } from "@reduxjs/toolkit";
const sidebarslice = createSlice({
  name: "app",
  initialState: { isMenuOnline: true },
  reducers: {
    togglesidebar(state) {
      state.isMenuOnline = !state.isMenuOnline;
    },
    sidebarhide(state) {
      state.isMenuOnline = false;
    },
  },
});
export const { togglesidebar, sidebarhide } = sidebarslice.actions;
export default sidebarslice.reducer;
