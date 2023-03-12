import React from "react";
import SongPopUp from "./OptionSongPopUp";
import Image from "next/image";
// fake data
import songs from "../../data/songs";
import album from "data/album";
// cmt

interface props {
  page: number;
}

export const SongsList = ({ page }: props) => {
  const albumLength = songs.length;

  return (
    <div className="relative overflow-x-auto shadow-md scrollbar-hidden sm:rounded-lg md:mx-4 bg-gradient-to-tr from-violet-700 to-black bggrad ">
      {/* album img */}
      <div className="flex m-8 ml-10 dark:text-white h-max items-center">
        <Image
          className="rounded-t-lg  w-[250px] h-[250px] object-cover"
          src={album[2].img}
          alt=""
          width={250}
          height={250}
        />
        <div className="flex flex-col ml-2 w-full">
          <div className="mx-2 text-xl font-thin">{album[1].type}</div>
          <div className="m-4 text-8xl font-bold truncate w-4/5">
            {album[1].name}
          </div>
          <div className="mx-2 text-xl font-thin">
            {album[1].description || "Music album"}
          </div>
          <div className="mx-2 text-xl font-thin">
            {album[1].singer || "Unknown"}
          </div>
        </div>
      </div>
      {/* song list */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-800 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Singer
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((songs, index) => {
            if (index < page && index < albumLength)
              return (
                <>
                  <tr
                    key={index}
                    className="border-b dark:border-gray-700 hover:bg-indigo-800 hover:text-white"
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
                    <td className="px-6 py-4 absolute ">
                      <SongPopUp index={index} />
                    </td>
                  </tr>
                </>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};
