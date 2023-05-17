import { ProductState } from "../types";
import { Axios } from "../config/axios";

const getAllProducts = async (): Promise<ProductState[]> => {
  const { data } = await Axios.get("/products");
  return data;
};

const getCartItems = async (userId: string) => {
  const { data } = await Axios.get(`/cart/${userId}`);
  return data;
};

const addToCart = async (val: {
  userId: string;
  productId: string;
  quantity: number;
}) => {
  const { data } = await Axios.post(`/cart/${val.userId}`, {
    productId: val.productId,
    quantity: val.quantity,
  });
  return data;
};

const productServices = {
  getAllProducts,
  getCartItems,
  addToCart,
};

export default productServices;
