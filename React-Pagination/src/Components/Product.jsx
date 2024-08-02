const Product = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 h-24 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-bold mb-1 text-center">{item.title}</h3>
          <p className="text-gray-400 text-sm text-center mb-2 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center mb-2">
            <span className="text-green-400 font-semibold text-lg mr-2">
              ${item.price}
            </span>
            <span className="text-gray-400 text-sm">({item.rating}★)</span>
          </div>
          <span
            className={`text-xs mb-2 ${
              item.stock > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {item.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
          <button className="mt-auto bg-blue-600 hover:bg-blue-500 text-white text-sm py-2 px-4 rounded-md">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
