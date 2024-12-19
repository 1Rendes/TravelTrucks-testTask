import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";
import toast from "react-hot-toast";

const INITIAL_STATE = {
  campers: {},
  favoriteCampers: [],
  isLoading: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    setFavoriteCampers(state, { payload }) {
      if (state.favoriteCampers.includes(payload)) {
        state.favoriteCampers = state.favoriteCampers.filter(
          (id) => id !== payload
        );
      } else state.favoriteCampers.push(payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.campers = payload;
        state.isLoading = false;
      })
      .addCase(getAllCampers.rejected, (state, { payload }) => {
        toast.error("We have no results for this request.");
        state.isLoading = false;
      });
  },
});

export const { setFavoriteCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
