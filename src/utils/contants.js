

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API || process.env.GOOGLE_API || process.env.API_KEY || "AIzaSyAXQY0iYy3R89eYg3hSPkvEMf_PrUxZzbg";
export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
      GOOGLE_API;


export const YOUTUBE_SEARCH_API = "/api/suggestions?client=firefox&ds=yt&q=";