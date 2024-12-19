import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
