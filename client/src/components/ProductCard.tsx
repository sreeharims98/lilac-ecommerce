import star from "../assets/icons/star.svg";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  totalRating: number;
}

function ProductCard({
  image,
  name,
  price,
  rating,
  totalRating,
}: ProductCardProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src={image} alt="" className="w-28 h-36 rounded-2xl object-cover" />

      <div className="flex flex-col justify-between h-full">
        <span className="text-black text-sm font-normal">{name}</span>
        <div className="flex flex-col justify-between gap-2">
          <span className="text-primaryColor text-xl font-semibold">
            ${price}
          </span>
          <div className="flex">
            <div className="flex">
              {[...Array(rating)].map((v, i) => (
                <img key={i} src={star} alt="" />
              ))}
            </div>
            <span className="text-ternaryColor text-base font-normal">
              ({totalRating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
