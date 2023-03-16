import React from "react";
import { useRouter } from "next/router";
import { CgMenuHotdog } from "react-icons/cg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import SearchInput from "./SearchInput";

// rafce
const Header = () => {
  const router = useRouter();
  return (
    <div className="header  backdrop-blur-3xl	sticky top-0 flex w-full h-12 md:pr-10 items-center text-white z-20">
      <div className="flex items-center w-full m-2">
        <div className="hidden lg:flex m-4 text-xl font-medium 	">
          <button onClick={() => router.back()}>
            <BiLeftArrow className="mr-4 active:translate-x-[-3px]" />
          </button>
          <button onClick={() => window.history.forward()}>
            <BiRightArrow className="active:translate-x-[3px]" />
          </button>
        </div>
        <div className="lg:hidden sm:block pt-2">
          <button>
            <CgMenuHotdog className="text-5xl" />
          </button>
        </div>
        <div className="text-black items-center py-2">
          <SearchInput />
        </div>
        <div className="text-right w-full p-0 md:px-4">User</div>
      </div>
    </div>
  );
};

export default Header;
