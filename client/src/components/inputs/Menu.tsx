import caretDown from "../../assets/icons/caret-down.svg";

interface MenuProps {
  text: string;
}

function Menu({ text }: MenuProps) {
  return (
    <div className="flex items-center gap-[6px] cursor-pointer">
      <span className="text-white font-semibold text-base">{text}</span>
      <img src={caretDown} alt="" />
    </div>
  );
}

export default Menu;
