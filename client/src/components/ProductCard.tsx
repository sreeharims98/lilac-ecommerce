import star from "../assets/icons/star.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { onOpenProduct, setSelectedProduct } from "../store/productSlice";
import { ProductState } from "../types";

interface ProductCardProps {
  product: ProductState;
  showDesc: boolean;
  clickable: boolean;
}

function ProductCard({ product, showDesc, clickable }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(onOpenProduct());
    dispatch(setSelectedProduct(product));
  };

  return (
    <div
      onClick={() => (clickable ? handleClick() : null)}
      className="flex items-center justify-center gap-4 cursor-pointer"
    >
      <img
        src={product.image}
        alt=""
        className="w-28 h-36 rounded-2xl object-cover"
      />

      <div className="flex flex-col justify-between h-full">
        <span className="text-black text-sm font-normal">{product.name}</span>
        {showDesc && (
          <span className="text-ternaryColor text-sm font-normal">
            {product.description}
          </span>
        )}

        <div className="flex flex-col justify-between gap-2">
          <span className="text-primaryColor text-xl font-semibold">
            ${product.price}
          </span>
          <div className="flex">
            <div className="flex">
              {[...Array(product.rating)].map((v, i) => (
                <img key={i} src={star} alt="" />
              ))}
            </div>
            <span className="text-ternaryColor text-base font-normal">
              ({product.totalRating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
