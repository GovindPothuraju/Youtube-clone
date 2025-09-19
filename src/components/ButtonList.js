import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Podcasts",
    "Movies",
    "Comedy",
    "Travel",
    "Technology"
  ];

   return (
    <div className="w-full overflow-x-auto scrollbar-hide px-4 lg:px-8">
      <div className="flex gap-2 max-w-[1600px] mx-auto snap-x snap-mandatory">
        {list.map((name) => (
          <div key={name} className="shrink-0 snap-start">
            <Button name={name} />
          </div>
        ))}
        </div>
      </div>
      );
    };

export default ButtonList;
