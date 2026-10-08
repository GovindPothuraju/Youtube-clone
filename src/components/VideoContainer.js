import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/contants"
import VideoCard,{Advideocard} from "../components/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      if (json && Array.isArray(json.items)) {
        setVideos(json.items);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-5 font-semibold text-gray-500">Loading videos...</div>;
  }

  return (
    <div className="flex flex-wrap m-5 gap-5">
      {/* Higher order component */}
      {videos && videos[0] && <Advideocard info={videos[0]} />}
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
}
export default VideoContainer;