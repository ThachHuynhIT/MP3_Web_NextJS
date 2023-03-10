import React from "react";
import Image from "next/image";

interface props {
  name: string;
  description: string;
  imgSrc: string;
}

const AlbumList = ({ name, description, imgSrc }: props) => {
  return (
    <div className="text-white  md:w-full h-80 pr-4  sm:scale-x-70 md:scale-100">
      <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow-neumorphism dark:bg-[#32325D] dark:border-gray-700 hover:bg-zinc-700 duration-200	">
        <a href="#" className="">
          <div className="flex w-full justify-center my-4 object-cover">
            <Image
              className="rounded-t-lg h-[200px] object-cover"
              src={imgSrc}
              alt="halo"
              width={220}
              height={220}
            />
          </div>
          <div className="p-5 pt-1 h-32">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white h-[30px] truncate">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[20px] truncate">
              {description}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AlbumList;
