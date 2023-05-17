import { cartModel } from "../models/cartModel.js";
import { productModel } from "../models/productModel.js";

export const getCartItems = async (req, res) => {
  const userId = req.params.userId;
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
    if (product.stock < quantity) {
      return res
        .status(404)
        .json({ error: "Quantity more than stock of product" });
    }

    //get cart of the user
    let cart = await cartModel.findOne({ user: userId });

    if (!cart) {
      // If the cart does not exist, create a new cart and add the item
      cart = await cartModel.create({
        user: userId,
        items: [{ product: productId, quantity }],
      });
      // Reduce the stock of the product by the requested quantity
      product.stock = product.stock - quantity;

      // Save the updated product and cart
      await product.save();
    } else {
      // Check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (existingItem) {
        //if quantity is zero
        if (quantity === 0) {
          //add prev quantity to stock
          const oldQuantity = existingItem.quantity;
          product.stock = product.stock + oldQuantity;
          //remove from cart
          cart.items = cart.items.filter(
            (item) => item.product !== existingItem.product
          );
          // Save the updated product and cart
          await product.save();
        } else {
          // If the product is already in the cart, update the quantity
          existingItem.quantity = existingItem.quantity + quantity;
          product.stock = product.stock - quantity;

          // Save the updated product and cart
          await product.save();
        }
      } else {
        // If the product is not in the cart, add a new item
        cart.items.push({ product: productId, quantity });

        //Reduce the stock of the product by the requested quantity
        product.stock = product.stock - quantity;

        // Save the updated product and cart
        await product.save();
      }

      await cart.save();
    }

    const allCart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");
    res.json(allCart);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};
