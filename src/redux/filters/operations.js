import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchLocations = async () => {
  try {
    const response = await axios.get(API_URL);

    if (Array.isArray(response.data)) {
      const locations = response.data
        .map(camper => camper.location)
        .filter(Boolean)
        .map(loc => {
          const parts = loc.split(",").map(part => part.trim());
          return parts.length === 2 ? `${parts[1]}, ${parts[0]}` : loc;
        });
      return Array.from(new Set(locations));
    } else if (response.data.items && Array.isArray(response.data.items)) {
      const locations = response.data.items
        .map(camper => camper.location)
        .filter(Boolean)
        .map(loc => {
          const parts = loc.split(",").map(part => part.trim());
          return parts.length === 2 ? `${parts[1]}, ${parts[0]}` : loc;
        });
      return Array.from(new Set(locations));
    } else {
      throw new Error("Unexpected API response format.");
    }
  } catch (error) {
    toast.error(
      `Failed to fetch locations. ${error.response?.data?.message || "Please try again later."}`
    );
    throw error;
  }
};
