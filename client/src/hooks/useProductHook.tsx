import { useDispatch } from "react-redux";
import productServices from "../services/productServices";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import {
  setAllProducts,
  setCartItems,
  setLoading,
} from "../store/productSlice";

function useProductHook() {
  const dispatch = useDispatch<AppDispatch>();

  //get all products
  const getAllProducts = async () => {
    dispatch(setLoading(true));
    try {
      const allProducts = await productServices.getAllProducts();
      dispatch(setAllProducts(allProducts));
    } catch (error: any) {
      toast.error(error?.message);
    }
    dispatch(setLoading(false));
  };

  //get cart items
  const getCartItems = async (userId: string) => {
    dispatch(setLoading(true));

    try {
      const cartItems = await productServices.getCartItems(userId);
      dispatch(setCartItems(cartItems?.items));
    } catch (error: any) {
      toast.error(error?.message);
    }
    dispatch(setLoading(false));
  };

  //add to cart
  const addToCart = async ({
    userId,
    productId,
    quantity,
    onCloseModal,
  }: {
    userId: string;
    productId: string;
    quantity: number;
    onCloseModal?: () => void;
  }) => {
    try {
      const cartItems = await productServices.addToCart({
        userId,
        productId,
        quantity,
      });

      if (quantity === 0) {
        toast.success("Item removed from cart!");
      } else {
        toast.success("Item added to cart!");
      }
      if (cartItems && onCloseModal) {
        onCloseModal();
      }
      dispatch(setCartItems(cartItems?.items));
    } catch (error: any) {
      toast.error(error?.message);
    }
    dispatch(setLoading(false));
    getAllProducts();
  };

  return { getAllProducts, getCartItems, addToCart };
}

export default useProductHook;
