import express from "express";
import { addItemToCart, getCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getCartItems);
router.post("/:userId", addItemToCart);

export { router as cartRoute };
