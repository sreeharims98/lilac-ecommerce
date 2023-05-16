import { cartModel } from "../models/cartModel.js";
import { productModel } from "../models/productModel.js";

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
    const product = await productModel.findById(productId);
    //check if product is there
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
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

      //if quantity is zero remove item from cart
      if (quantity === 0 && existingItem) {
        cart.items = cart.items.filter(
          (item) => item.product !== existingItem.product
        );
      }

      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};
