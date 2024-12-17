import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const INITIAL_STATE = {
  campers: [],
  favoriteCampers: [],
  filters: [],
  error: null,
};
const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.campers = payload;
      })
      .addCase(getAllCampers.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
