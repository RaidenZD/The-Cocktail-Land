import { Link } from "react-router-dom";
import image from "../assets/not-found.svg";

const Error = () => {
  return (
    <section className=" flex flex-col h-screen dark:bg-black dark:text-white justify-center items-center">
      <img src={image} alt="404" />
      <h1 className=" text-4xl font-bold font-mono mt-8">404 Page Not Found</h1>
      <button
        className="px-5 py-2 bg-pink-600 text-white rounded mt-6 hover:bg-pink-700 transition-colors"
        type="button"
      >
        <Link to={"/"}>Back Home</Link>
      </button>
    </section>
  );
};
export default Error;
