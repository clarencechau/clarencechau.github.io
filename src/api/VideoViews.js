import React, { useEffect, useState } from "react";

const VideoViews = ({ videoId }) => {
  const [views, setViews] = useState(null);
  
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchViews = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`
      );
      const data = await response.json();
      const viewCount = data.items[0]?.statistics?.viewCount;
      setViews(viewCount);
    };

    fetchViews();
  }, [videoId]);

  return (
    <div>
      <p>{views ? views + " views": "Loading..."}</p>
    </div>
  );
};

export default VideoViews;