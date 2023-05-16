interface IconTextProps {
  icon: string;
  text: string;
}

function IconText({ icon, text }: IconTextProps) {
  return (
    <div className="flex items-center gap-[16px] cursor-pointer">
      <img src={icon} alt="" />
      <span className="text-white font-semibold text-base">{text}</span>
    </div>
  );
}

export default IconText;
