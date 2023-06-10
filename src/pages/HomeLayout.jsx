import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <div className=" min-h-screen dark:bg-neutral-800 dark:text-white transition-colors">
      <header className=" shadow-xl dark:shadow-neutral-700">
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default HomeLayout;
