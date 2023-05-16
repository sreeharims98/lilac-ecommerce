import newsletter from "../assets/icons/newsletter.svg";
import circleDots from "../assets/icons/circle-dots.svg";

import Subscribe from "./inputs/Subscribe";

function NewsLetter() {
  return (
    <div className="bg-primaryColor p-20 flex items-center justify-between gap-4">
      <img src={newsletter} alt="" className="w-[116px] h-[102px]" />
      <div className="flex flex-col gap-6 w-2/6">
        <div className="relative w-fit">
          <span className="font-bold text-3xl text-white">
            Sign Up for Newsletter
          </span>
          <img
            src={circleDots}
            alt=""
            className="absolute -top-5 -right-8 z-0 opacity-40"
          />
        </div>
        <span className="text-white text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="relative">
        <Subscribe />
        <img
          src={circleDots}
          alt=""
          className="absolute -bottom-4 -right-4 z-0 opacity-40"
        />
      </div>
    </div>
  );
}

export default NewsLetter;
