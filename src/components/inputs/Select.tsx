import arrowDown from "../../assets/icons/arrow-down.svg";

interface SelectProps {
  text: string;
  size: "small" | "large";
}

function Select({ text, size }: SelectProps) {
  return (
    <div
      className={`flex items-center gap-[16px] cursor-pointer 
        ${
          size === "large" &&
          "bg-bgColor rounded-xl px-7 py-5 w-full max-w-[240px] justify-between"
        }`}
    >
      <span
        className={`text-secondaryColor 
       ${size === "large" ? "text-xl font-medium" : "text-base font-normal"}`}
      >
        {text}
      </span>
      <img
        src={arrowDown}
        alt=""
        className={` ${size === "large" ? "h-5 w-5" : "h-4 w-4"}`}
      />
    </div>
  );
}

export default Select;
