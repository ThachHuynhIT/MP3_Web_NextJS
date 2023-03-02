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
    <div className="text-white my-6 md:w-full h-80 pr-4 pb-6 scale-x-50 sm:scale-x-50 md:scale-100">
      <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 hover:bg-zinc-700 duration-200	">
        <a href="#" className="">
          <div className="flex w-full justify-center mt-2">
            <Image
              className="rounded-t-lg h-44 "
              src={imgSrc}
              alt=""
              width={200}
              height={200}
            />
          </div>
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
