import { useCallback, useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { onCloseProduct } from "../../store/productSlice";
import ProductCard from "../ProductCard";
import Button from "../Button";
import { toast } from "react-toastify";
import ProductQuantity from "../ProductQuantity";
import useProductHook from "../../hooks/useProductHook";

const ProductModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { addToCart } = useProductHook();

  const { user } = useSelector((state: RootState) => state.auth);
  const { isOpenProduct, selectedProduct, loading } = useSelector(
    (state: RootState) => state.product
  );

  const [quantity, setQuantity] = useState(1);

  const onCloseModal = useCallback(() => {
    setQuantity(1);
    dispatch(onCloseProduct());
  }, []);

  const onChangeQuantity = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  const onSubmit = () => {
    try {
      if (user) {
        if (selectedProduct?._id) {
          addToCart({
            userId: user?.uid,
            productId: selectedProduct?._id,
            quantity,
            onCloseModal,
          });
        } else {
          toast.warning("Product not selected!");
        }
      } else {
        toast.warning("Login to add to cart!");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {selectedProduct && (
        <>
          <ProductCard
            product={selectedProduct}
            showDesc={true}
            clickable={false}
          />
          <div className="flex items-center justify-between">
            <ProductQuantity
              stock={selectedProduct.stock}
              quantity={quantity}
              onChangeQuantity={onChangeQuantity}
              disabled={false}
            />
            <Button text="Add to Cart" onClick={onSubmit} disabled={loading} />
          </div>
        </>
      )}
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={isOpenProduct}
        onClose={onCloseModal}
        title={"Add to Cart"}
        body={bodyContent}
      />
    </div>
  );
};
export default ProductModal;
