interface ProductQuantityProps {
  quantity: number;
  onChangeQuantity: (val: number) => void;
  stock: number;
}

function ProductQuantity({
  quantity,
  onChangeQuantity,
  stock,
}: ProductQuantityProps) {
  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor="quantity"
        className="block mb-2 text-sm font-medium text-secondaryColor"
      >
        Quantity :
      </label>
      <select
        id="quantity"
        className="cursor-pointer w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        value={quantity}
        onChange={(e) => onChangeQuantity(parseInt(e.target.value))}
      >
        {[...Array(stock)].map((s, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductQuantity;
