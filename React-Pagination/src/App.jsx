import { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import Product from "./Components/Product";

const App = () => {
  const [data, setData] = useState();
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);

        const res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}`
        );
        const { products } = await res.json();
        setData(products);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log("Error Occured : " + err);
      }
    };
    setData([]);
    setLoading(true);
    const timerId = setTimeout(fetchData, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [skip]);

  console.log(data);

  const NextPage = () => {
    setSkip((perv) => perv + 10);
  };

  const PervPage = () => {
    if (skip === 0) {
      return;
    } else {
      setSkip((perv) => perv - 10);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <div className="mb-8 w-full max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Products Pagination
        </h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh] min-w-full">
            <Loading />
          </div>
        ) : error ? (
          <span className="text-red-500 text-center block">
            Error loading products...
          </span>
        ) : (
          data?.length > 0 && <Product products={data} />
        )}
      </div>

      <div className="flex space-x-4 mt-8">
        <button
          onClick={PervPage}
          disabled={skip <= 0}
          className={`px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300 ${
            skip <= 0
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          Prev
        </button>
        <button
          onClick={NextPage}
          className="px-6 py-3 rounded-md text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
