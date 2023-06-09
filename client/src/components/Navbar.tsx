import BadgeIcon from "./BadgeIcon";
import Search from "./inputs/Search";
import Select from "./inputs/Select";

import logo from "../assets/logo.png";
import fav from "../assets/icons/fav.svg";
import cart from "../assets/icons/cart.svg";
import Avatar from "./Avatar";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { onOpenCart } from "../store/productSlice";
import { useEffect } from "react";
import useProductHook from "../hooks/useProductHook";

const allCategories = [
  "Books",
  "Electronics",
  "Real Estate",
  "Cars-Bikes",
  "Dorm-furniture",
  "Men",
  "Women",
  "Music",
  "Hobbies Games",
  "Toys",
  "Kids",
];

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { getCartItems } = useProductHook();

  const { cartItems } = useSelector((state: RootState) => state.product);
  const { user } = useSelector((state: RootState) => state.auth);

  const handleCartClick = () => {
    dispatch(onOpenCart());
  };

  useEffect(() => {
    if (user) {
      getCartItems(user?.uid);
    }
  }, [user]);

  return (
    <div className="bg-white px-20 py-5 flex items-start flex-col gap-8 shadow-[0_20px_39px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between gap-8 w-full">
        <img src={logo} alt="" />
        <div className="flex gap-8 w-3/6">
          <Select text="Classifieds" size="large" />
          <Search text="Search here..." />
        </div>
        <div className="flex items-center gap-8">
          <BadgeIcon icon={fav} badge={0} />
          <BadgeIcon
            icon={cart}
            badge={cartItems.length}
            onClick={handleCartClick}
          />
          <Avatar />
        </div>
        <Button text="Classifieds" />
      </div>
      <div className="flex items-center gap-10">
        <Select text="All Categories" size="small" />
        <div className="flex items-center gap-8">
          {allCategories.map((category) => (
            <span
              key={category}
              className="text-secondaryColor text-base font-normal"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
