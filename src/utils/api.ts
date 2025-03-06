import axios from "axios";
import { Restaurant, Response } from "../utils/restaurant";

const API_BASE_URL = "https://api.wefood.dev";

export const getRestaurants = async (
  offset: number = 0,
  limit: number = 10
): Promise<Restaurant[]> => {
  const response = await axios.get(`${API_BASE_URL}/restaurants`, {
    params: { offset, limit },
  });
  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch restaurants: ${response.status} ${response.statusText}`
    );
  }
  const data = response.data;
  return data.docs;
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  const response = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch restaurant: ${response.status} ${response.statusText}`
    );
  }

  const data = response.data;
  return data;
};
