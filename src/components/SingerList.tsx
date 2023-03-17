import Image from "next/image";
import React from "react";

interface props {
  imgSrc: string;
  name: string;
  description: string;
}

const SingerList = ({ imgSrc, name, description }: props) => {
  return (
    <div className="text-white md:w-full h-80 pr-4  sm:scale-x-70 md:scale-100">
      <div className="max-w-sm w-full h-full border border-transparent rounded-lg shadow-neumorphism hover:brightness-125 duration-200	">
        <a href="#" className="">
          <div className="flex w-full justify-center my-4 object-cover">
            <Image
              className="rounded-full object-cover h-[176px] hover:bg-slate-600 shadow-circle"
              src={imgSrc}
              alt="Singer"
              width={176}
              height={176}
            />
          </div>
          <div className="p-5 h-32">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[38px] truncate">
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

export default SingerList;
