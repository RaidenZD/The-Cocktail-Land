import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import fetchCocktails from "../axios/customFetch";
import { Detail, ErrorFetch, Loading } from "../components";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/MainContext";

const CocktailDetails = () => {
  const { cocktailId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const { favoriteList, addFavoriteItem, removeFavoriteItem } =
    useGlobalContext();

  const { isLoading, error, data, isRefetching } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const { data } = await fetchCocktails.get(
        `/json/v1/1/lookup.php?i=${cocktailId}`
      );

      return data;
    },
  });

  const handleDisLike = () => {
    removeFavoriteItem(cocktailId);
    setIsLiked(false);
  };

  const handleLike = () => {
    const item = { strDrink, strGlass, strDrinkThumb, strAlcoholic, idDrink };
    addFavoriteItem(item);
    setIsLiked(true);
  };

  useEffect(() => {
    favoriteList.forEach((item) => {
      if (item.idDrink === cocktailId) {
        setIsLiked(true);
      }
    });
  }, []);

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  if (error) {
    return <ErrorFetch text={error.message} />;
  }

  const {
    idDrink,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = data?.drinks[0];

  const ingredients = (
    <>
      {strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4}{" "}
      {strIngredient5} {strIngredient6} {strIngredient7} {strIngredient8}{" "}
      {strIngredient9} {strIngredient10}
    </>
  );

  return (
    <article className=" relative flex flex-col justify-center items-center">
      <h3 className=" text-4xl font-bold font-mono mt-7 md:mt-16">
        {strDrink}
      </h3>

      <div className=" flex flex-col md:flex-row gap-10 mt-7 md:mt-16">
        <img className=" w-80" src={strDrinkThumb} alt={strDrink} />

        <div className=" flex flex-col justify-center gap-5">
          <Detail title={"Name"} text={strDrink} />

          <Detail title={"Category"} text={strCategory} />

          <Detail title={"Info"} text={strAlcoholic} />

          <Detail title={"Glass"} text={strGlass} />

          <Detail
            title={"Instructions"}
            text={strInstructions.substring(0, strInstructions.indexOf("."))}
          />

          <Detail title={"Ingredients"} text={ingredients} />
        </div>
      </div>

      <button
        className=" mt-7 md:mt-14 px-5 mb-7 py-2 bg-pink-600 hover:bg-pink-700 transition-all text-white rounded"
        type="button"
      >
        <Link to={-1}>Go Back</Link>
      </button>

      {/* Like Button */}
      <button
        className=" absolute top-0 right-0 p-5 md:p-10 text-4xl sm:text-5xl"
        type="button"
      >
        {isLiked ? (
          <FcLike onClick={handleDisLike} />
        ) : (
          <FcLikePlaceholder onClick={handleLike} />
        )}
      </button>
    </article>
  );
};
export default CocktailDetails;
