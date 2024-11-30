import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetails, fetchCampers } from "./operations.js";

const initialState = {
  list: [],
  favorites: [],
  details: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const camperId = action.payload;
      const isFavorite = state.favorites.includes(camperId);

      if (isFavorite) {
        state.favorites = state.favorites.filter(id => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
        state.list = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching campers.";
      })
      .addCase(fetchCamperDetails.pending, state => {
        state.loading = true;
        state.details = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
