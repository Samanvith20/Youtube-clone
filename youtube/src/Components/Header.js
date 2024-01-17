import React, { useEffect, useState } from 'react';
import { HAMBURGER_LOGO, USER_IMAGE, YOUTUBE_LOGO } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { updatecache } from '../utils/searchslice';

const Header = () => {
  const [search, setsearch] = useState([]);
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState([]);
  const dispatch = useDispatch();

  const toggleClick = () => {
    dispatch(toggleMenu());
  };
   
  const searchdata = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + search);
      const json = await response.json();
      setsuggestions(json[1]);
      // make an action and update the slice
       dispatch(updatecache({
        [search]:json[1],
       }
       ))
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };
   // subscribe the slice
   const searchcache= useSelector((store)=>store.search)
   useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[search]) {
        setsuggestions(searchcache[search]);
      } else {
        searchdata();
      }
    }, 300);
  
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  
  return (
    <div className="grid grid-flow-col p-5 m-2 ">
      <div className="flex col-span-1">
        <img src={HAMBURGER_LOGO} alt="Hamburger" className="h-8 cursor-pointer" onClick={toggleClick} />
        <a href="/">
          <img src={YOUTUBE_LOGO} alt="YouTube Logo" className="h-8 mx-4" />
        </a>
      </div>
      <div className="col-span-10 px-10 ml-36 relative">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>

        {/* Suggestions */}
        {showsuggestions && suggestions.length > 0 && (
          <ul className="border border-gray-400 absolute bg-white mt-2 w-1/2">
            {suggestions.map((item, index) => (
              <li key={index} className="p-2 cursor-pointer hover:bg-gray-200">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img src={USER_IMAGE} alt="User Logo" className="h-15 w-9 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
