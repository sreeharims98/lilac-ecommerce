interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ text, icon, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-7 py-5 rounded-xl flex items-center justify-center gap-4 bg-cyanColor shadow-[0_11px_27px_rgba(0,198,215,0.35)]
        ${disabled ? "opacity-25 cursor-not-allowed" : undefined}`}
    >
      <span className="text-white font-bold text-lg">{text}</span>
      {icon && <img src={icon} alt="" />}
    </button>
  );
}

export default Button;
