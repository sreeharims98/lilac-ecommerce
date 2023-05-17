import { useCallback } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { onCloseCart } from "../../store/productSlice";

import CartProduct from "../CartProduct";
import Button from "../Button";

const CartModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: RootState) => state.auth);
  const { isOpenCart, cartItems, loading } = useSelector(
    (state: RootState) => state.product
  );

  const onCloseModal = useCallback(() => {
    dispatch(onCloseCart());
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-10">
      {cartItems.length === 0 && (
        <div className="text-ternaryColor text-sm font-normal text-center p-4">
          Cart is Empty
        </div>
      )}
      {cartItems.map((item) => (
        <CartProduct key={item._id} item={item} loading={loading} user={user} />
      ))}
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={isOpenCart}
        onClose={onCloseModal}
        title={"Cart"}
        body={bodyContent}
      />
    </div>
  );
};
export default CartModal;
