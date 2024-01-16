import React from "react";

// Function to convert view count to a readable format
const formatViewCount = (count) => {
  if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + "M";
  } else if (count >= 1e3) {
    return (count / 1e3).toFixed(1) + "K";
  } else {
    return count.toString();
  }
};

const VideoCard = ({ info }) => {
  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViewCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
