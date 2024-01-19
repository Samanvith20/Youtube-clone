import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is properly configured

const VideoShimmerLoader = () => {
  return (
    <div className="animate-pulse flex flex-wrap justify-center space-x-4">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="max-w-xs w-full bg-gray-300 h-80 p-4 rounded-md m-2">
          <div className="bg-gray-400 h-52 rounded"></div>
          <div className="mt-4 h-4 bg-gray-300 rounded"></div>
          <div className="mt-2 w-3/4 h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default VideoShimmerLoader;
