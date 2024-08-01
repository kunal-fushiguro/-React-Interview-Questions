import useStore from "../Store/store";
import Loading from "./Loading";

const ProductList = () => {
  const results = useStore((state) => state.results);
  const status = useStore((state) => state.status);

  if (status === "LOADING")
    return (
      <div className="w-full h-[90%] flex justify-center items-center">
        <Loading />
      </div>
    );
  if (status === "ERROR")
    return (
      <div className="w-full h-[90%] flex justify-center items-center font-bold text-6xl">
        Error Occured
      </div>
    );
  console.log(results);
  return (
    <div className="w-full h-[90%] flex justify-center items-center gap-8 flex-wrap p-4 bg-gray-100">
      {results.map((product) => {
        return (
          <div
            key={product.id}
            className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.title}
                className=" h-48 w-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                {product.availabilityStatus || "In Stock"}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-600 mr-2">
                  ${product.price.toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-xs text-gray-500 line-through">
                    $
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
              <div className="mt-3">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
