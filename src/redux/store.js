import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice.js";
import { filtersReducer } from "./filters/slice.js";

const preloadedState = {
  campers: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
};
export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.getState().campers.favorites)
  );
});
