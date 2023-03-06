import React from "react";
import songs from "../../data/songs";
import { BsThreeDots } from "react-icons/bs";
import SongPopUp from "./SongPopUp";

export const SongsList = () => {
  console.log(songs);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <th scope="col" className="px-6 py-3">
              Url
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((songs, index) => {
            return (
              <>
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {songs.name}
                  </th>
                  <td className="px-6 py-4">{songs.author}</td>
                  <td className="px-6 py-4 absolute ">
                    {/* <BsThreeDots /> */}
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
