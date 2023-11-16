import axios from "axios";

export const baseURL = `https://api.escuelajs.co/api/v1`;

export const apiService = axios.create({
  baseURL,
});

const getAllProducts = async () => {
  const response = await apiService.get("/products");
  return response.data;
};

export default {
  getAllProducts,
};
