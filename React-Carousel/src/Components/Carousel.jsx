import { useEffect, useRef, useState } from "react";
import Data from "./Data.json";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    if (index < Data.length) {
      setIndex((perv) => perv + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePerv = () => {
    if (index === 0) {
      setIndex(Data.length - 1);
    } else {
      setIndex((perv) => perv - 1);
    }
  };
  useEffect(() => {
    ref.current = setInterval(handleNext, 4000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="relative w-[80vw] h-[80vh] outline rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => clearInterval(ref.current)}
        onMouseLeave={() => (ref.current = setInterval(handleNext, 4000))}
      >
        <div className="h-full w-full object-cover transition-opacity duration-500 ease-in-out transform hover:scale-105">
          <img
            src={Data[index].download_url}
            alt={Data[index].author}
            className="h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out"
            onLoad={(e) => (e.target.style.opacity = 1)}
          />
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none shadow-lg transition-all duration-300 ease-in-out"
          onClick={handlePerv}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none shadow-lg transition-all duration-300 ease-in-out"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
