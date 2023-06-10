import { useGlobalContext } from "../context/MainContext";

const SearchForm = () => {
  const { setSearchText, searchText } = useGlobalContext();

  const handleTextChange = (event) => {
    const text = event.target.value;

    setSearchText(text);
  };

  return (
    <form className="flex flex-col gap-2 p-6 shadow-lg dark:shadow-neutral-500 border shadow-neutral-600 max-w-md mx-auto w-full rounded">
      <label className=" font-mono text-sm" htmlFor="name">
        Search your favorite cocktail
      </label>

      <input
        className=" bg-pink-100 text-black px-4 py-1 rounded outline-1 outline-pink-300 "
        type="text"
        id="name"
        name="name"
        onChange={handleTextChange}
        value={searchText}
      />
    </form>
  );
};
export default SearchForm;
