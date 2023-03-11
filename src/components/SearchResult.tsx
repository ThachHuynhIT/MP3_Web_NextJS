import React from "react";
import AlbumList from "./AlbumList";
import Image from "next/image";
import { useRouter } from "next/router";

import songs from "../../data/songs";
import SongPopUp from "./OptionSongPopUp";

interface props {
  keyword: string;
}

const SearchResult = ({ keyword }: props) => {
  return (
    <div className="flex flex-col md:m-8 h-max">
      <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-3">
        <div className="w-1/2">Songs</div>
        <button className="text-right w-1/2">See more</button>
      </div>
      <div className="song h-max bg-stone-700 bg-opacity-20 rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <tbody className="w-full">
            {songs.map((songs, index) => {
              if (index < 5)
                return (
                  <>
                    <tr
                      key={index}
                      className="border-b dark:border-gray-700 hover:bg-indigo-800 hover:rounded-lg  hover:text-white"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Image
                          className="rounded-t-lg mr-2 w-[40px] h-[40px] object-cover"
                          src={songs.links.images[1].url}
                          alt=""
                          width={50}
                          height={50}
                        ></Image>
                        {songs.name}
                      </th>
                      <td className="px-6 py-4">{songs.author}</td>
                      <td className="px-6 py-4">
                        <SongPopUp index={index} />
                      </td>
                    </tr>
                  </>
                );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-3">
        <div className="w-1/2">Artists</div>
        <button className="text-right w-1/2">See more</button>
      </div>
      <div className="artists h-52 bg-stone-700 "></div>
      <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-3">
        <div className="w-1/2">Albums</div>
        <button className="text-right w-1/2">See more</button>
      </div>
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
