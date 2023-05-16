import { productModel } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.json(allProducts);
  } catch (error) {
    res.status(400).json({ message: "Products not found !" });
  }
};
