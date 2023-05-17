import { CartState, ProductState, UserState } from "../types";
import ProductCard from "./ProductCard";
import { useCallback } from "react";
import Button from "./Button";
import ProductQuantity from "./ProductQuantity";
import useProductHook from "../hooks/useProductHook";
// import removeIco from "../assets/icons/remove.svg";

interface CartProductProps {
  item: CartState;
  user: UserState | null;
  loading: boolean;
}

function CartProduct({ item, user, loading }: CartProductProps) {
  const { addToCart } = useProductHook();

  const onRemoveProduct = (product: ProductState) => {
    if (user) {
      addToCart({ userId: user?.uid, productId: product._id, quantity: 0 });
    }
  };

  const onChangeQuantity = useCallback((value: number) => {
    if (user) {
      addToCart({
        userId: user?.uid,
        productId: item.product._id,
        quantity: value,
      });
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
        <div className="flex justify-between flex-col gap-0">
          <ProductQuantity
            stock={item.product.stock}
            quantity={item.quantity}
            onChangeQuantity={onChangeQuantity}
            disabled={true}
          />
          {/* <div className="text-center p-2">
            Stocks left: &nbsp;<strong>{item.product.stock - quantity}</strong>
          </div> */}
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
