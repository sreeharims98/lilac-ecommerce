import search from "../../assets/icons/search.svg";

interface SearchProps {
  text: string;
}

function Search({ text }: SearchProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-[550px] gap-[16px] cursor-pointer bg-bgColor rounded-xl px-7 py-5">
      <span className="text-secondaryColor text-xl font-medium">{text}</span>
      <img src={search} alt="" />
    </div>
  );
}

export default Search;
