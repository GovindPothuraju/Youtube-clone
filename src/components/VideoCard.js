const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="w-full sm:w-[20rem] md:w-[22rem] lg:w-[20rem] cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden border bg-white">
      <div className="relative">
        <img
          alt={snippet.title}
          src={snippet.thumbnails.high.url}
          className="w-full h-48 sm:h-52 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
          3:45
        </span>
      </div>
      <div className="flex mt-3 px-3 pb-3 gap-3">
        <img
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
          src={`https://ui-avatars.com/api/?name=${snippet.channelTitle}&background=random`}
          alt={snippet.channelTitle}
        />
        <div className="flex flex-col">
          <h3 className="text-sm sm:text-base line-clamp-2 font-semibold">
            {snippet.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {snippet.channelTitle}
          </p>
          <p className="text-gray-500 text-xs">
            {Number(statistics.viewCount).toLocaleString()} views •{" "}
            {new Date(snippet.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Advideocard = ({ info }) => {
  return (
    <div className="p-1 sm:p-2">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
