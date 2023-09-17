import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const onVideoPress = () => {
    setPlay(!play);

    if (play) {
      videoRef.current.pause();
      return;
    }
    if (!play) {
      videoRef.current.play();
    }
  };
  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
