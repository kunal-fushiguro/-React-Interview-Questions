import { useEffect } from "react";
import useStore from "../Store/store";

const useFetchData = () => {
  const { query, setResults, setStatus, setCache, cache } = useStore();
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      try {
        setStatus("LOADING");
        // retrieved from cache
        if (cache[query]) {
          // console.log("retrieved from cache");
          setResults(cache[query]);
          setStatus("SUCCESS");
          return;
        }

        // API Call
        // console.log("API Call");
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=12`,
          { signal }
        );
        const data = await res.json();
        // Set the status
        setStatus("SUCCESS");
        // set the cache
        setCache(query, data.products);
        // set the products
        setResults(data.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("ERROR");
        }
      }
    };
    // debounce
    const timerId = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timerId);
      abortController.abort();
    };
  }, [query, setResults, setStatus, setCache, cache]);
};

export default useFetchData;
