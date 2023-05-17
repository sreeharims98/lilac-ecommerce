import { CartState, ProductState, UserState } from "../types";
import ProductCard from "./ProductCard";
import { addToCart } from "../store/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useCallback, useState } from "react";
import Button from "./Button";
import ProductQuantity from "./productQuantity";
// import removeIco from "../assets/icons/remove.svg";

interface CartProductProps {
  item: CartState;
  user: UserState | null;
  loading: boolean;
}

function CartProduct({ item, user, loading }: CartProductProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [quantity, setQuantity] = useState(item.quantity);

  const onRemoveProduct = (product: ProductState) => {
    if (user) {
      dispatch(
        addToCart({ userId: user?.uid, productId: product._id, quantity: 0 })
      );
    }
  };

  const onChangeQuantity = useCallback((value: number) => {
    if (user) {
      setQuantity(value);
      dispatch(
        addToCart({
          userId: user?.uid,
          productId: item.product._id,
          quantity: value,
        })
      );
    }
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <ProductCard
          product={item.product}
          showDesc={false}
          clickable={false}
        />
        <div className="flex justify-between flex-col">
          <ProductQuantity
            stock={item.product.stock}
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
          />
          <Button
            onClick={() => onRemoveProduct(item.product)}
            text="Remove"
            disabled={loading}
            // icon={removeIco}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartProduct;
