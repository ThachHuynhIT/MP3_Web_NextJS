import React from "react";
import AlbumListHeader from "@/components/AlbumListHeader";
import AlbumList from "@/components/AlbumList";

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
    {
      name: "Thach",
      description: "Thach",
      img: "/image/HTlogo.png",
    },
  ];
  return (
    <div className="h-max p-8 w-full">
      <AlbumListHeader typeOfList="Album phu hop voi ban"></AlbumListHeader>
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
