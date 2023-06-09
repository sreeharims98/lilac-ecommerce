import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { RootState } from "../../store";
import { useEffect } from "react";
import ProductModal from "../../components/modals/ProductModal";
import CartModal from "../../components/modals/CartModal";
import useProductHook from "../../hooks/useProductHook";

function BestDeals() {
  const { getAllProducts } = useProductHook();

  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-20 bg-white">
      <div className="flex items-center justify-between w-full mb-8">
        <span className="font-semibold text-[30px] text-black">Best Deals</span>
        <span className="font-semibold text-[20px] text-primaryColor">
          View all
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            clickable={true}
            showDesc={false}
          />
        ))}
      </div>
      <ProductModal />
      <CartModal />
    </div>
  );
}

export default BestDeals;
