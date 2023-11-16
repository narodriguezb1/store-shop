import axios from "axios";

export const baseURL = `https://fakestoreapi.com`;

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
