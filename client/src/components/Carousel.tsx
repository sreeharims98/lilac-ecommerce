import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CarouselComp from "./CarouselComp";
function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="py-20">
      <Slider {...settings}>
        <div className="px-4">
          <CarouselComp />
        </div>
        <div className="px-4">
          <CarouselComp />
        </div>
        <div className="px-4">
          <CarouselComp />
        </div>
        <div className="px-4">
          <CarouselComp />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
