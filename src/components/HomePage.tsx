import React, { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";

import * as albumService from "../services/albumService";
import SingerList from "./SingerList";
import ItemTitle from "./ItemTitle";
import albums from "data/album";

const HomePage = () => {
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await albumService.getAllAlbum(1);
  //     console.log(response);
  //   };
  //   fetchApi();
  // }, []);

  let typeOfAlbum = albums?.map((album) => {
    return album.type;
  });
  let loc = new Set(typeOfAlbum);
  let types = Array.from(loc);

  return (
    <div className="h-max p-8 pb-1 w-full">
      {types?.map((type, index1) => {
        return (
          <div key={index1}>
            <ItemTitle name={type} url={"/album/" + type}></ItemTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
              {/* sing of type */}
              {albums?.map((dataE, index2) => {
                if (index2 <= 5 && dataE.type === type) {
                  console.log(index2);
                }
                if (dataE.type === type) {
                  return (
                    <div key={index2}>
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
      })}
      <ItemTitle name={"Singer"} url={""}></ItemTitle>
      <div className="singer grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-rows-1 w-full overflow-y-hidden h-80 md:overflow-x-auto">
        {albums.map((dataE, index) => {
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
