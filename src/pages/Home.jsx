import { CocktailList, SearchFrom } from "../components";

const Home = () => {
  return (
    <section className=" max-w-4xl px-6 mx-auto flex flex-col justify-center mt-14">
      <SearchFrom />

      <CocktailList />
    </section>
  );
};
export default Home;
