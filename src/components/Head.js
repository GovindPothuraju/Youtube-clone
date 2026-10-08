import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) return;
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery));
      if (!data.ok) return;
      const json = await data.json();
      if (json && json[1]) {
        setSuggestions(json[1]);
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      }
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="grid grid-flow-col items-center p-2 sm:p-3 gap-2 sm:gap-4">
        {/* Left - Hamburger + Logo */}
        <div className="flex col-span-1 items-center">
          <img
            onClick={toggleMenuHandler}
            className="h-8 w-8 sm:h-10 sm:w-10 p-1 mx-1 sm:mx-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
            alt="menu"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          />
          <img
            className="h-6 sm:h-8 mx-1 sm:mx-2"
            alt="youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
        </div>

        {/* Middle - Search Bar */}
        <div className="col-span-10 flex justify-center relative w-full">
          <div className="flex w-full max-w-md sm:max-w-2xl">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow border border-gray-300 p-1 sm:p-2 rounded-l-full focus:outline-none text-xs sm:text-sm md:text-base"
              type="text"
              placeholder="Search"
            />
            <button className="border border-gray-300 px-3 sm:px-5 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <img
                className="w-4 sm:w-5"
                alt="search"
                src="https://www.svgrepo.com/show/7109/search.svg"
              />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && searchQuery && (
            <div className="absolute top-10 sm:top-12 w-full max-w-md sm:max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul>
                {suggestions.map((s) => (
                  <li
                    onClick={() => setSearchQuery(s)}
                    key={s}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-100 cursor-pointer text-xs sm:text-sm md:text-base"
                  >
                    <img
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
                      alt="search"
                      src="https://www.svgrepo.com/show/7109/search.svg"
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right - User Icon */}
        <div className="col-span-1 flex justify-end">
          <img
            className="h-6 sm:h-8 mx-1 sm:mx-2"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
