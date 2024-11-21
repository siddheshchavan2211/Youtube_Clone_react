//create slice then create reducer for store the data in cache action
//subscribe for store.search slice and store in it the cache result -var name is eg.sid
//for storing check sid has the value coming from input and then setitto the setresult

import { createSlice } from "@reduxjs/toolkit";

//update cache dispatch action in api
const searchSlice = createSlice({
  name: "searchincache",
  initialState: {},
  reducers: {
    cachedata: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cachedata } = searchSlice.actions;
export default searchSlice.reducer;
