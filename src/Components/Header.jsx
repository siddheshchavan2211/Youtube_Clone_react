import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from "./Utils/sidebarslice";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOutube_Suggestion_api } from "./apikey";
import { cachedata } from "./Utils/searchSlice";

const Header = () => {
  const [suggestion, setsuggestion] = useState(""); //get response input tag and search in api
  const [boxtoggle, setboxtoggle] = useState(false); //hide and open search result box
  const [result, setresult] = useState([]); //set the result to the search result box
  const setSelector = useSelector((store) => store.searchincache);
  const dispatch = useDispatch();
  console.log(suggestion);
  const ToggleFun = () => {
    dispatch(togglesidebar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!suggestion) return; // Prevent fetching for empty input

      if (setSelector[suggestion]) {
        setresult(setSelector[suggestion]);
      } else {
        SuggestionApi();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [suggestion]);

  const SuggestionApi = async () => {
    const data = await fetch(YOutube_Suggestion_api + suggestion);
    const json = await data.json();
    // console.log(json[1]);
    setresult(json[1]);
    dispatch(
      cachedata({
        [suggestion]: json[1],
      })
    );
  };

  return (
    <div className="h-16 pt-2 shadow-lg grid grid-flow-col transform transition-transform duration-100000 ease-in-out relative z-30">
      <div className="flex col-span-1">
        <img
          onClick={() => ToggleFun()}
          className="h-8 ml-8 pt-3 cursor-pointer"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
        />
        <NavLink to="/">
          <img
            onClick={() => ToggleFun()}
            className="h-12 pl-2 cursor-pointer"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </NavLink>
      </div>

      <div className="col-span-10 px-10 h-11 flex relative ">
        <input
          className="rounded-l-full border border-gray-500 w-1/2 p-1 pl-3"
          type="text"
          placeholder="search"
          value={suggestion}
          onChange={(e) => setsuggestion(e.target.value)}
          onFocus={() => setboxtoggle(true)}
          onBlur={() => setboxtoggle(false)}
        />
        <button className="bg-gray-200 p-3 rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {boxtoggle && (
          <div className="absolute left-0 top-full mt-2 ml-8 bg-white shadow-xl rounded-xl w-[34.3rem] z-40">
            <ul>
              {result.map((res) => (
                <li
                  key={res}
                  className="bg-white mx-2 my-2  hover:bg-slate-300 cursor-default"
                >
                  🔍&nbsp; {res}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
