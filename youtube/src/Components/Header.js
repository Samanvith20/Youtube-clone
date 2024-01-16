import React from 'react';
import { HAMBURGER_LOGO, USER_IMAGE, YOUTUBE_LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 ">
      <div className="flex col-span-1">
        <img src={HAMBURGER_LOGO} alt="Hamburger" className="h-8 cursor-pointer" onClick={toggleClick} />
       
       <a href="/"> <img src={YOUTUBE_LOGO} alt="YouTube Logo" className="h-8 mx-4" /></a>
      </div>
      <div className="col-span-10 px-10 ml-36">
        <input
          type="text"
          placeholder="Search"
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div>
        <img src={USER_IMAGE} alt="User Logo" className="h-15 w-9 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
