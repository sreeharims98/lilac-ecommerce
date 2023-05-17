import { ProductState } from "../types";
import { Axios } from "../config/axios";

const getAllProducts = async (): Promise<ProductState[]> => {
  const { data } = await Axios.get("/products");
  return data;
};
const productServices = {
  getAllProducts,
};

export default productServices;
