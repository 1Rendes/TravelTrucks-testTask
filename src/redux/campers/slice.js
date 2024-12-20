import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getCamperById } from "./operations";
import toast from "react-hot-toast";

const INITIAL_STATE = {
  campers: {
    items: [],
    total: 0,
  },
  choosenCamper: {},
  favoriteCampers: [],
  isLoading: false,
  loaded: false,
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
    setCampersToInitial(state) {
      state.campers.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.campers.items = [...state.campers.items, ...payload.items];
        state.campers.total = payload.total;
        state.isLoading = false;
      })
      .addCase(getAllCampers.rejected, (state) => {
        toast.error("We have no results for this request.");
        state.isLoading = false;
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.choosenCamper = payload;
        state.isLoading = false;
        state.loaded = true;
      })
      .addCase(getCamperById.rejected, (state) => {
        toast.error("Unable to load data");
        state.isLoading = false;
      });
  },
});

export const { setFavoriteCampers, setCampersToInitial } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
