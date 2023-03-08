import React from "react";
import AlbumList from "./AlbumList";

const SearchResult = () => {
  return (
    <div className="flex flex-col md:m-8 h-max">
      <div className="song h-52 bg-stone-700">Songs</div>
      <div className="artists h-52 bg-stone-700">Artists</div>
      Album
      <div className="album bg-stone-700 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
        <AlbumList
          name={""}
          description={""}
          imgSrc={
            "https://res.cloudinary.com/dc2kbu5a4/image/upload/v1674986889/cld-sample-5.jpg"
          }
        />
      </div>
    </div>
  );
};

export default SearchResult;
