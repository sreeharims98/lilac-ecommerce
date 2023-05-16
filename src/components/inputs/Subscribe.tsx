function Subscribe() {
  return (
    <div className="relative flex items-center justify-center z-10">
      <input
        type="text"
        placeholder="Enter your email here"
        className="bg-white rounded-xl w-[653px] h-[80px] px-[42px] text-lg font-normal"
      />
      <button className="bg-secondaryColor w-[187px] h-[60px] text-white text-lg font-medium rounded-xl absolute right-2">
        SUBSCRIBE
      </button>
    </div>
  );
}

export default Subscribe;
