import { useSelector } from "react-redux";
import { Home, Clapperboard, PlaySquare, Library, History, Video, Clock, ThumbsUp, Music, Gamepad, Film, Tv, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar =()=>{
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  //early return pattern
  if(!isMenuOpen) return null;
  return(
    <div className="w-60 px-3 py-1 shadow-lg text-sm position:st">
      <ul className="space-y-2">
        <Link to="/">
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <Home className="w-5 h-5" /> <span>Home</span>
          </li>
        </Link>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Clapperboard className="w-5 h-5" /> <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <PlaySquare className="w-5 h-5" /> <span>Subscriptions</span>
        </li>
      </ul>
      <hr className="my-3" />
      <ul className="space-y-2">
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Library className="w-5 h-5" /> <span>Library</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <History className="w-5 h-5" /> <span>History</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Video className="w-5 h-5" /> <span>Your Videos</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Clock className="w-5 h-5" /> <span>Watch Later</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <ThumbsUp className="w-5 h-5" /> <span>Liked Videos</span>
        </li>
      </ul>

      <hr className="my-3" />
      <h1 className="font-bold text-gray-700 mb-2">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Music className="w-5 h-5" /> <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Trophy className="w-5 h-5" /> <span>Sports</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Gamepad className="w-5 h-5" /> <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Film className="w-5 h-5" /> <span>Movies</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Tv className="w-5 h-5" /> <span>Live</span>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;