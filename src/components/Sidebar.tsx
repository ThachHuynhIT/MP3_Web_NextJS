import React from "react";
import IconSidebar from "./IconSidebar";
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
    <div className="text-gray-500 px-5 pt-8 pb-36 text-xs lg:text-xl border-r border-x-green-300 h-screen scrollbar-hidden sm:max-w-(12rem) lg:max-w-(15rem) hidden md:block">
      <IconSidebar icon={AiOutlineHome} label="Home" />
      <IconSidebar icon={AiOutlineSearch} label="Search" />
      <IconSidebar icon={BiLibrary} label="Library" />
      <hr className="border-t-[0.1px] border-gray-900" />
      <IconSidebar icon={AiOutlinePlus} label="Create Playlist" />
      <IconSidebar icon={AiOutlineHeart} label="Liked Songs" />
      <hr className="border-t-[0.1px] border-gray-900 " />
      <IconSidebar icon={AiOutlineDelete} label="Delete" />
    </div>
  );
};

export default Sidebar;
