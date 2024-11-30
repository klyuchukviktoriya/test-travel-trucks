import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  transmission: "",
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      const { location, vehicleType, transmission, equipment } = action.payload;
      if (location !== undefined) state.location = location;
      if (vehicleType !== undefined) state.vehicleType = vehicleType;
      if (transmission !== undefined) state.transmission = transmission;
      if (equipment !== undefined) state.equipment = equipment;
    },
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
