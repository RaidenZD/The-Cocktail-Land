import { ImSpinner4 } from "react-icons/im";

const Loading = () => {
  return (
    <section className=" flex flex-col justify-center items-center mt-16 gap-10">
      <h2 className=" text-4xl font-mono font-semibold animate-pulse">
        Please Wait...
      </h2>

      <ImSpinner4 className=" text-7xl text-pink-600 animate-spin" />
    </section>
  );
};
export default Loading;
