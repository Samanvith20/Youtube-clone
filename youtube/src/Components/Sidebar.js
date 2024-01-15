import React from 'react';
import { HOME_LOGO, SHORTS_LOGO, YOUTUBE_LOGO } from '../utils/constants';

const Sidebar = () => {
  return (
    <div className="p-4">
      <ul>
        <li className="flex items-center mb-2">
          <img src={HOME_LOGO} alt="home" className="w-6 h-6 mr-2 rounded-full" />
          Home
        </li>
        <li className="flex items-center mb-2">
          <img src={YOUTUBE_LOGO} alt="demo" className="w-6 h-6 mr-2 rounded-full" />
          Demo
        </li>
        <li className="flex items-center">
          <img src={SHORTS_LOGO} alt='shorts' className="w-6 h-6 mr-2 rounded-full" />
          Shorts
        </li>
      </ul>

      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">Subscriptions</h1>
        <ul className="list-disc pl-4">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-2">Watch later</h1>
        <ul className="list-disc pl-4">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
