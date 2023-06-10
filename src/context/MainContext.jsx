import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addFavoriteItem = (item) => {
    setFavoriteList((prevList) => {
      const newList = prevList.concat(item);
      localStorage.setItem("favorite", JSON.stringify(newList));
      return newList;
    });
  };

  const removeFavoriteItem = (id) => {
    setFavoriteList((prevList) => {
      const newList = prevList.filter((item) => item.idDrink !== id);
      localStorage.setItem("favorite", JSON.stringify(newList));
      return newList;
    });
  };

  const refetchData = () => {
    setRefetch((prevState) => {
      return !prevState;
    });
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark-mode", newDarkMode);
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("favorite"));
    if (list !== null) {
      setFavoriteList(list);
    }

    const darkModeState = localStorage.getItem("dark-mode");
    if (darkModeState === "true") {
      toggleDarkMode();
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setSearchText,
        searchText,
        addFavoriteItem,
        removeFavoriteItem,
        favoriteList,
        refetch,
        refetchData,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => useContext(GlobalContext);
