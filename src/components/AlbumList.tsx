import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface props {
  name: string;
  description: string;
  imgSrc: string;
}

const AlbumList = ({ name, description, imgSrc }: props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/album/" + name);
  };

  return (
    <div className="text-white md:w-full my-1 h-80 pr-4 sm:scale-x-70 md:scale-100">
      <div className="max-w-sm w-full h-full border border-transparent rounded-lg shadow-neumorphism hover:brightness-90 duration-200	">
        <div className="" onClick={handleClick}>
          {/* image */}
          <div className="flex w-full justify-center my-4 object-cover px-2">
            <Image
              className="rounded-t-lg h-[200px] object-cover"
              src={imgSrc}
              alt="halo"
              width={180}
              height={180}
            />
          </div>
          {/* Container */}
          <div className="p-5 pt-1 h-32">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white h-[30px] truncate">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[20px] truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
