import React, { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";

import * as albumService from "../services/albumService";

const HomePage = () => {
  let testData = [
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/2.jpg",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
  ];

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await albumService.getAllAlbum(1);
  //     console.log(response);
  //   };
  //   fetchApi();
  // }, []);

  return (
    <div className="h-max p-8 w-full">
      <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-3">
        <div className="w-1/2">Album hay</div>
        <button className="text-right w-1/2">Xem thêm</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
        {testData.map((dataE, index) => {
          if (index <= 5) {
            return (
              <AlbumList
                key={index}
                name={dataE.name}
                description={dataE.description}
                imgSrc={dataE.img}
              ></AlbumList>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;
