import React, { useEffect, useState } from "react";
import ThumbUp from "@mui/icons-material/ThumbUp";

const VideoLikes = ({ videoId }) => {
  const [likes, setLikes] = useState(null);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchLikes = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`
      );
      const data = await response.json();
      const likesCount = data.items[0]?.statistics?.likeCount;
      console.log(data);
      setLikes(likesCount);
    };

    fetchLikes();
  }, [videoId]);

  return (
    <div>
      <p>
        {likes ? (
          <>
            {likes}
          </>
        ) : (
          "Loading..."
        )}
      </p>
    </div>
  );
};

export default VideoLikes;
