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
    <div className="sidebar text-gray-500 sticky top-0 bottom-0 m-0 px-5 pt-5 pb-36 text-xs lg:text-sm h-max scrollbar-hidden sm:max-w-[15rem] lg:max-w-[27rem] hidden md:block">
      <Image
        src="/image/HTlogo.png"
        alt="me"
        width="200"
        height="100"
        className="bg-slate-400 rounded-xl mb-4"
      />
      <IconSidebar icon={AiOutlineHome} link="/" label="Home" />
      <IconSidebar icon={AiOutlineSearch} link="/search" label="Search" />
      <IconSidebar icon={BiLibrary} link="/" label="Library" />
      <hr className="border-t-[0.1px] border-gray-900" />
      <IconSidebar icon={AiOutlinePlus} link="/" label="Create Playlist" />
      <IconSidebar icon={AiOutlineHeart} link="/" label="Liked Songs" />
      <hr className="border-t-[0.1px] border-gray-900 " />
      <IconSidebar icon={AiOutlineDelete} link="/" label="Delete" />
    </div>
  );
};

export default Sidebar;
