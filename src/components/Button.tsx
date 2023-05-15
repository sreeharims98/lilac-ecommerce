interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className="px-7 py-5 bg-[#00C6D7] shadow-[0_11px_27px_rgba(0,198,215,0.35)] rounded-xl text-white font-bold text-lg">
      {text}
    </button>
  );
}

export default Button;
