import { ProductState } from "../types";
import { Axios } from "../config/axios";

export const getProducts = async (): Promise<ProductState[]> => {
  const { data } = await Axios.get("/products");
  return data;
};
