import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/MainContext";

const Cocktail = ({ data }) => {
  const { strDrink, strGlass, strDrinkThumb, strAlcoholic, idDrink } = data;
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const { removeFavoriteItem, addFavoriteItem, favoriteList } =
    useGlobalContext();

  const clickHandler = () => {
    navigate(`/${idDrink}`);
  };

  const handleLike = () => {
    const item = { strDrink, strGlass, strDrinkThumb, strAlcoholic, idDrink };
    addFavoriteItem(item);
    setIsLiked(true);
  };

  const handleDisLike = () => {
    removeFavoriteItem(idDrink);
    setIsLiked(false);
  };

  useEffect(() => {
    favoriteList.forEach((item) => {
      if (item.idDrink === idDrink) {
        setIsLiked(true);
      }
    });
  }, []);

  return (
    <li className=" flex flex-col rounded shadow-lg border shadow-neutral-400 cursor-pointer">
      <img className=" rounded-t" src={strDrinkThumb} alt={strDrink} />

      <div className=" flex flex-col p-6 gap-1">
        <div className=" flex justify-between items-center">
          <h3 className=" text-2xl font-bold font-mono">{strDrink}</h3>

          {isLiked ? (
            <button onClick={handleDisLike} className=" text-2xl" type="button">
              <FcLike />
            </button>
          ) : (
            <button onClick={handleLike} className=" text-2xl" type="button">
              <FcLikePlaceholder />
            </button>
          )}
        </div>

        <span className=" text-sm font-serif font-semibold text-neutral-700 dark:text-neutral-400">
          {strGlass}
        </span>

        <div className=" flex justify-between items-center">
          <span className="text-xs text-neutral-500 dark:text-neutral-300">
            {strAlcoholic}
          </span>

          <button
            onClick={clickHandler}
            className=" bg-pink-500 text-white px-4 rounded hover:bg-pink-600 hover:scale-105 transition-all"
            type="button"
          >
            Details
          </button>
        </div>
      </div>
    </li>
  );
};
export default Cocktail;
