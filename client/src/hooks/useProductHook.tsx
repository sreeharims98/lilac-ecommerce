import { useDispatch } from "react-redux";
import productServices from "../services/productServices";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { setAllProducts, setCartItems } from "../store/productSlice";

function useProductHook() {
  const dispatch = useDispatch<AppDispatch>();

  const getAllProducts = async () => {
    const allProducts = await productServices.getAllProducts();
    dispatch(setAllProducts(allProducts));
  };

  const getCartItems = async (userId: string) => {
    const cartItems = await productServices.getCartItems(userId);
    dispatch(setCartItems(cartItems?.items));
  };

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
    getAllProducts();
  };

  return { getAllProducts, getCartItems, addToCart };
}

export default useProductHook;
