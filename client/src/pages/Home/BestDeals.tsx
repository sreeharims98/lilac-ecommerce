import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getAllProducts } from "../../store/productSlice";

function BestDeals() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getAllProducts(""));
  }, []);

  return (
    <div className="p-20 bg-white">
      <div className="flex items-center justify-between w-full mb-8">
        <span className="font-semibold text-[30px] text-black">Best Deals</span>
        <span className="font-semibold text-[20px] text-primaryColor">
          Veiw all
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            totalRating={product.totalRating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
