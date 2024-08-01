import useStore from "../Store/store";

const SearchInput = () => {
  const query = useStore((state) => state.query);
  const setQuery = useStore((state) => state.setQuery);
  return (
    <div className="w-full h-[10%] flex justify-center items-center bg-gray-100">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[30%] h-[70%] px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm text-gray-800 font-semibold placeholder-gray-500 transition-all duration-300 ease-in-out"
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchInput;
