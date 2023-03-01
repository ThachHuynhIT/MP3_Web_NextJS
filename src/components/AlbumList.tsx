import React from "react";
import AlbumListHeader from "@/components/AlbumListHeader";
import Image from "next/image";

interface props {
  name: string;
  description: string;
  imgSrc: string;
}

const AlbumList = ({ name, description, imgSrc }: props) => {
  return (
    <div className="text-white my-6 md:w-full h-80 pr-4 pb-6">
      <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg h-44"
            src={imgSrc}
            alt=""
            width={300}
            height={500}
          />
          <div className="p-5 h-32">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AlbumList;
