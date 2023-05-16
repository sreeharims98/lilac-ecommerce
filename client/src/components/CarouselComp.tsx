import car from "../assets/car-1.svg";

function CarouselComp() {
  return (
    <div className="relative">
      <img src={car} alt="" className="rounded-[40px] w-full h-full" />
      <span className="absolute right-10 top-[50%] -translate-y-[50%] text-white text-5xl leading-tight font-light z-20 w-[770px]">
        From students to senior citizens this web portal of <br />
        <strong className="font-semibold">"Products and Classifieds”</strong>
        <br />
        provides it all
      </span>
    </div>
  );
}

export default CarouselComp;
