import React from 'react';
import { HOME_LOGO, SHORTS_LOGO, YOUTUBE_LOGO } from '../utils/constants';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 py-3">
      <ul className="space-y-2">
        <li className="flex items-center mb-4 text-lg font-semibold">
          <img src={HOME_LOGO} alt="home" className="w-6 h-6 mr-2 rounded-full" />
          Home
        </li>
        <li className="flex items-center mb-4 text-lg font-semibold">
          <img src={YOUTUBE_LOGO} alt="demo" className="w-6 h-6 mr-2 rounded-full" />
          Demo
        </li>
        <li className="flex items-center mb-4 mt-6 text-lg font-semibold">
          <img src={SHORTS_LOGO} alt='shorts' className="w-6 h-6 mr-2 rounded-full" />
          Shorts
        </li>
      </ul>

      <div className="mb-8 mt-6">
        <h1 className="text-xl font-bold mb-2">Subscriptions</h1>
        <ul className="list-disc pl-6 space-y-1">
          <li className="text-lg">Music</li>
          <li className="text-lg">Sports</li>
          <li className="text-lg">Gaming</li>
          <li className="text-lg">Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-2">Watch later</h1>
        <ul className="list-disc pl-6 space-y-1">
          <li className="text-lg">Music</li>
          <li className="text-lg">Sports</li>
          <li className="text-lg">Gaming</li>
          <li className="text-lg">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
