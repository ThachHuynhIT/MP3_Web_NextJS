import React from "react";
import AlbumList from "./AlbumList";
import Image from "next/image";

import { useSelector } from "react-redux";
import { selectSearch } from "slices/searchSlice";

import songs from "../../data/songs";
import SongPopUp from "./OptionSongPopUp";
import ItemTitle from "./ItemTitle";
import SingerList from "./SingerList";

const SearchResult = () => {
  const keyWord = useSelector(selectSearch);

  let testData = [
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
  ];
  return (
    <div className="flex flex-col md:m-8 ">
      {/* song list was searched */}
      {keyWord}
      <ItemTitle name={"Songs"} url={""}></ItemTitle>
      <div className="song h-max bg-stone-700 bg-opacity-20 rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden">
          <tbody className="w-full">
            {songs.map((songs, index) => {
              if (index < 5)
                return (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-700 hover:bg-indigo-800 hover:rounded-lg  hover:text-white"
                  >
                    {/* <td className="px-6 py-4">{index + 1}</td> */}
                    <th
                      scope="row"
                      className="flex  items-center text-ellipsis overflow-hidden md:px-6 w-[200px] md:w-full py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Image
                        className="rounded-t-lg mr-2 w-[40px] h-[40px] object-cover"
                        src={songs.links.images[1].url}
                        alt=""
                        width={50}
                        height={50}
                      ></Image>
                      <div className="flex flex-col">
                        {songs.name}
                        <div className=" font-light">{songs.author}</div>
                      </div>
                    </th>
                    <td className="md:px-6 py-4">{songs.author}</td>
                    <td className="px-6 py-4">
                      <SongPopUp index={index} />
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>

      {/* singer list was searched */}
      <ItemTitle name={"Singer"} url={""}></ItemTitle>
      <div className="singer grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
        {testData.map((dataE, index) => {
          if (index <= 5) {
            return (
              <div key={index}>
                <SingerList
                  imgSrc={dataE.img}
                  name={dataE.name}
                  description={dataE.description}
                ></SingerList>
              </div>
            );
          }
        })}
      </div>

      {/* album list was searched */}
      <ItemTitle name={"Album"} url={""}></ItemTitle>
      <div className="album grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
        {testData.map((dataE, index) => {
          if (index <= 5) {
            return (
              <div key={index}>
                <AlbumList
                  name={dataE.name}
                  description={dataE.description}
                  imgSrc={dataE.img}
                ></AlbumList>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchResult;
