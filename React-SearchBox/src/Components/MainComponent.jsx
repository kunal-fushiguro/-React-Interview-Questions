import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import useFetchData from "../Hooks/useFetchData";

const MainComponent = () => {
  useFetchData();
  return (
    <div className="flex justify-center items-center gap-4 flex-col w-screen h-screen">
      <SearchInput />
      <ProductList />
    </div>
  );
};

export default MainComponent;
