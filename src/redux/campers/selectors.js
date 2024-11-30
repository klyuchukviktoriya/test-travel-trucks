import { createSelector } from "reselect";

const selectCampersState = state => state.campers;

export const selectCampers = createSelector(
  [selectCampersState],
  campersState => campersState.list || []
);

export const selectLoading = createSelector(
  [selectCampersState],
  campersState => campersState.loading
);

export const selectError = createSelector(
  [selectCampersState],
  campersState => campersState.error
);

export const selectCamperDetails = createSelector(
  [selectCampersState],
  campersState => campersState.details
);

export const selectFavorites = createSelector(
  [selectCampersState],
  campersState => campersState.favorites || []
);
