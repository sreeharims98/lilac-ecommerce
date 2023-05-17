import { Axios } from "../config/axios";

const getAllProducts = async () => {
  try {
    const { data } = await Axios.get("/products");
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

const getCartItems = async (userId: string) => {
  try {
    const { data } = await Axios.get(`/cart/${userId}`);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

const addToCart = async (val: {
  userId: string;
  productId: string;
  quantity: number;
}) => {
  try {
    const { data } = await Axios.post(`/cart/${val.userId}`, {
      productId: val.productId,
      quantity: val.quantity,
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

const productServices = {
  getAllProducts,
  getCartItems,
  addToCart,
};

export default productServices;
