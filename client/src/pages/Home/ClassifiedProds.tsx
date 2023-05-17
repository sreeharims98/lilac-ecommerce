import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightWhite from "../../assets/icons/arrow-right-white.svg";

import Button from "../../components/Button";
import ClassifiedProductCard from "../../components/ClassifiedProductCard";

function ClassifiedProds() {
  return (
    <div className="bg-[#E5E5E5] pl-20 py-20 flex gap-12">
      <div className="flex flex-col items-center justify-center gap-8 w-60">
        <span className="font-semibold text-3xl text-black text-center">
          Classified Products on the week
        </span>
        <div className="flex gap-4">
          <button className="rounded-full p-3 bg-white shadow-[0px_6px_14px_rgba(100,106,131,0.16)]">
            <img src={arrowRight} alt="" className="rotate-180 w-5 h-5" />
          </button>
          <button className="rounded-full p-3 bg-white shadow-[0px_6px_14px_rgba(100,106,131,0.16)]">
            <img src={arrowRight} alt="" className="w-5 h-5" />
          </button>
        </div>
        <Button text="Explore" icon={arrowRightWhite} />
      </div>
      <div className="flex gap-12 overflow-hidden">
        <ClassifiedProductCard
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Camera"
          price={220}
          location="Cape Hadstone"
          isUrgentSelling={true}
        />
        <ClassifiedProductCard
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Camera"
          price={220}
          location="Cape Hadstone"
          isUrgentSelling={false}
        />
        <ClassifiedProductCard
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Camera"
          price={220}
          location="Cape Hadstone"
          isUrgentSelling={true}
        />
        <ClassifiedProductCard
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Camera"
          price={220}
          location="Cape Hadstone"
          isUrgentSelling={false}
        />
      </div>
    </div>
  );
}

export default ClassifiedProds;
