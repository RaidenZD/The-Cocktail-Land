import { Cocktail } from "../components";
import { useGlobalContext } from "../context/MainContext";

const Favorites = () => {
  const { favoriteList } = useGlobalContext();

  return (
    <section className=" max-w-4xl mx-auto px-3 my-16">
      <h2 className=" text-4xl text-center font-semibold font-mono italic">
        Favorite Cocktails
      </h2>

      {favoriteList.length ? (
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
          {favoriteList.map((item) => {
            return <Cocktail key={item.idDrink} data={item} />;
          })}
        </ul>
      ) : (
        <p className=" text-center text-2xl text-pink-600 mt-8">
          You have no favorite cocktails!
        </p>
      )}
    </section>
  );
};
export default Favorites;
