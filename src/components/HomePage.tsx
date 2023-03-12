import React, { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";

import * as albumService from "../services/albumService";
import SingerList from "./SingerList";
import ItemTitle from "./ItemTitle";

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
    <div className="h-max p-8 pb-1 w-full">
      <ItemTitle name={"Album"} url={""}></ItemTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
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
    </div>
  );
};

export default HomePage;
