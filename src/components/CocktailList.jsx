import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context/MainContext";
import Loading from "./Loading";
import fetchCocktails from "../axios/customFetch";
import Cocktail from "./Cocktail";
import ErrorFetch from "./ErrorFetch";

const CocktailList = () => {
  const { searchText, refetch } = useGlobalContext();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["cocktails", searchText, refetch],

    queryFn: async () => {
      const { data } = await fetchCocktails.get(
        `/json/v1/1/search.php?s=${searchText}`
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error || isError) {
    return <ErrorFetch text={error.message} />;
  }

  return (
    <section className=" max-w-4xl mx-auto px-3 my-16">
      <h2 className=" text-4xl text-center font-semibold font-mono italic">
        Cocktails
      </h2>

      {data.drinks ? (
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data.drinks.map((item) => {
            return <Cocktail key={item.idDrink} data={item} />;
          })}
        </ul>
      ) : (
        <p className=" text-center text-2xl text-pink-600 mt-8">
          Sorry No Cocktail Matched Your Search!
        </p>
      )}
    </section>
  );
};
export default CocktailList;
