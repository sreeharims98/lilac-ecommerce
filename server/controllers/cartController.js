import { cartModel } from "../models/cartModel.js";
import { productModel } from "../models/productModel.js";
import { userModel } from "../models/userModel.js";

export const getCartItems = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "cart not found !" });
  }
};

export const addItemToCart = async (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  try {
    const user = await userModel.findById(userId);
    const product = await productModel.findById(productId);
    if (!user || !product) {
      return res.status(404).json({ error: "User or product not found" });
    }

    //product stock should be more than the quantity user is adding
    if (product.stock <= quantity) {
      return res
        .status(404)
        .json({ error: "Quantity more than stock of product" });
    }

    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      // If the cart does not exist, create a new cart and add the item
      cart = await cartModel.create({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      // Check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (existingItem) {
        // If the product is already in the cart, update the quantity
        existingItem.quantity = quantity;
      } else {
        // If the product is not in the cart, add a new item
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
