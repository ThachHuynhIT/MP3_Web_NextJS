import React from "react";
import songs from "../../data/songs";
import SongPopUp from "./SongPopUp";
import Image from "next/image";

export const SongsList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md scrollbar-hidden sm:rounded-lg mx-4 bg-gradient-to-tr from-violet-500 to-black bggrad ">
      <div className="m-4 ">
        <Image
          priority
          className="rounded-t-lg h-44 "
          src="/image/2.jpg"
          alt=""
          width={200}
          height={200}
        />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-800 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {/* {songs.map((songs, index) => {
            return (
              <>
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {songs.name}
                  </th>
                  <td className="px-6 py-4">{songs.author}</td>
                  <td className="px-6 py-4 absolute ">
                    <SongPopUp index={index} />
                  </td>
                </tr>
              </>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};
