interface ButtonProps {
  text: string;
  icon?: string;
}

function Button({ text, icon }: ButtonProps) {
  return (
    <button className="px-7 py-5 bg-cyanColor shadow-[0_11px_27px_rgba(0,198,215,0.35)] rounded-xl flex items-center gap-4">
      <span className="text-white font-bold text-lg">{text}</span>
      {icon && <img src={icon} alt="" />}
    </button>
  );
}

export default Button;
