import React from "react";
import IconSidebar from "./IconSidebar";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="truncate sidebar text-gray-500 sticky top-0 bottom-0 m-0 px-5 pt-5 pb-36 text-xs lg:text-sm h-max  sm:max-w-[12rem] lg:max-w-[20rem] hidden md:block">
      <Image
        priority
        src="/image/logo.png"
        alt="me"
        width="200"
        height="100"
        className=" rounded-xl mb-4  "
      />
      <IconSidebar icon={AiOutlineHome} link="/" label="Home" />
      <IconSidebar icon={AiOutlineSearch} link="/search" label="Search" />
      <IconSidebar icon={BiLibrary} link="/" label="Library" />
      <hr className="border-t-[0.1px] border-gray-900" />
      <IconSidebar icon={AiOutlinePlus} link="/" label="Create Playlist" />
      <IconSidebar icon={AiOutlineHeart} link="/" label="Liked Songs" />
      <hr className="border-t-[0.1px] border-gray-900 " />
      <IconSidebar icon={AiOutlineDelete} link="/" label="Test page router" />
      <IconSidebar icon={AiOutlineDelete} link="/NotFound" label="Not Found" />
      <IconSidebar icon={AiOutlineDelete} link="/login" label="Login" />
      <IconSidebar icon={AiOutlineDelete} link="/album" label="Album" />
    </div>
  );
};

export default Sidebar;
