import { NavLink, Link } from "react-router-dom";
import { navList } from "../utils/UiConstants";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "../context/MainContext";

const activeClass = ({ isActive }) => {
  return isActive
    ? "text-pink-600 underline"
    : " text-gray-500 hover:underline dark:text-gray-400";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  const toggleTheme = () => {
    toggleDarkMode();
    setIsMenuOpen(false);
  };

  return (
    <nav className="max-w-5xl px-4 sm:px-7 mx-auto flex justify-between items-center py-5">
      <h1
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className=" text-xl md:text-2xl font-mono cursor-pointer"
      >
        <Link to="/">
          The
          <span className=" font-bold text-2xl md:text-3xl text-pink-600">
            Cocktail
          </span>
          Land
        </Link>
      </h1>

      <ul className="hidden sm:flex font-semibold gap-4 md:gap-7">
        {navList.map((item) => {
          return (
            <li
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
              key={item.id}
            >
              <NavLink className={activeClass} to={item.path}>
                {item.text}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <button
        className=" hidden sm:block text-pink-500 text-3xl md:text-4xl"
        onClick={() => toggleDarkMode()}
        type="button"
      >
        {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>

      {/* Hamburger btn */}
      <button
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        type="button"
        className=" sm:hidden text-4xl text-pink-600 hover:scale-105 transition-all"
      >
        <GiHamburgerMenu />
      </button>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className=" sm:hidden fixed top-0 right-0 rounded z-10 bg-white dark:bg-black shadow-2xl">
          <button
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            type="button"
            className=" absolute top-0 text-red-600 text-3xl rounded  right-0 p-[14px] hover:scale-105 transition-all"
          >
            <AiOutlineClose />
          </button>

          <ul className="py-5 text-xl px-9 flex mt-7 flex-col sm:hidden font-semibold gap-4 md:gap-7">
            {navList.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    onClick={() => setIsMenuOpen((prevState) => !prevState)}
                    className={activeClass}
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}

            <li
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 cursor-pointer hover:underline"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
