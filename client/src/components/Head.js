import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const timer=setTimeout(()=>getSearchSuggestions(),200);
    return()=>{
      clearTimeout(timer)
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`, { mode: 'no-cors' });
    const json = await data.json;
    console.log(json)
    console.log(YOUTUBE_SEARCH_API + searchQuery + ", { mode: 'no-cors' }")
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 pr-2 cursor-pointer"
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 pl-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
            alt="Logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-20 flex items-center ">
        <input
          className="border-gray-400 border w-1/2 px-5  py-1px rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border-gray-400 border px-5 h-4/5 py-1px rounded-r-full bg-gray-200">
          <FaSearch />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
