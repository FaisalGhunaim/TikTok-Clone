import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      return setVideos(
        snapshot.docs.map((doc) => {
          return doc.data() ;
        })
      );
    });
  }, [videos]);

  return (
    <div className="app">
      <div className="app-videos">
        {videos.map(
          ({ url, description, channel, song, likes, messages, shares }) => {
            return (
              <Video
                url={url}
                description={description}
                channel={channel}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
