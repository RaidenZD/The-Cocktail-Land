import { useGlobalContext } from "../context/MainContext";

const ErrorFetch = ({ text }) => {
  const { refetchData } = useGlobalContext();

  return (
    <section className="flex flex-col justify-center items-center mt-16 gap-10">
      <h2 className="text-4xl font-mono font-semibold text-red-600">
        An Error Ocurred!
      </h2>

      <p className=" text-xl text-red-500">{text}</p>

      <button
        onClick={refetchData}
        type="button"
        className=" bg-pink-600 text-white px-6 py-1 rounded hover:bg-pink-700 transition-colors"
      >
        Refresh
      </button>
    </section>
  );
};
export default ErrorFetch;
