import locationGrey from "../assets/icons/location-grey.svg";

interface ClassifiedProductCardProps {
  image: string;
  name: string;
  price: number;
  location: string;
  isUrgentSelling?: boolean;
}

function ClassifiedProductCard({
  image,
  name,
  price,
  location,
  isUrgentSelling,
}: ClassifiedProductCardProps) {
  return (
    <div className="relative min-w-[348px] flex items-center justify-center flex-col bg-white rounded-[30px] ">
      <img
        src={image}
        alt=""
        className="w-[348px] h-[314px] rounded-[30px] object-cover"
      />
      {isUrgentSelling && (
        <span className="absolute top-8 right-0 bg-cyanColor text-white rounded-l-[25px] px-3 py-2 text-base font-semibold">
          Urgent Selling
        </span>
      )}

      <div className="flex flex-col w-full p-6 gap-4">
        <span className="text-black text-base font-normal">{name}</span>
        <div className="flex items-center justify-between gap-2">
          <span className="text-cyanColor text-2xl font-semibold">
            ${price}
          </span>
          <div className="flex items-center gap-1">
            <img src={locationGrey} alt="" className="w-3 h-3" />
            <span className="text-ternaryColor text-base font-normal">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassifiedProductCard;
