import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilters = (state) => state.filters.name || "";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload || "";
    },
  },
});

export const { changeNameFilter } = filtersSlice.actions;

export default filtersSlice.reducer;


