import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [showvideo, setshowvideo] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      const json = await response.json();
      setshowvideo(json.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center ">
    {showvideo && showvideo.length > 0 &&
      showvideo.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
        <Videocard key={video.id} info={video} />
        </Link>
      ))}
  </div>
  );
};

export default VideoContainer;
