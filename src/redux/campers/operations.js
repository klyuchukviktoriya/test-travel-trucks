import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const params = {
        location: filters.location || "",
        form: filters.vehicleType || "",
        transmission: filters.transmission || "",
        ...filters.equipment?.reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
      };

      console.log("Filters applied:", params);

      const response = await axios.get(API_URL, { params });

      console.log("API response:", response.data);

      if (!response.data.items || response.data.items.length === 0) {
        console.log("No campers found for the given filters.");
        return [];
      }

      return response.data.items;
    } catch (error) {
      console.error("Error fetching campers:", error.message);
      return rejectWithValue(error.response?.data || "Error fetching campers");
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchCamperDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching camper details:", error.message);
      return rejectWithValue(
        error.response?.data || "Error fetching camper details"
      );
    }
  }
);