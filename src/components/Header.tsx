import React from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import SearchInput from "./SearchInput";

// rafce
const Header = () => {
  return (
    <div className="bg-white sticky top-0 flex w-full h-12 pr-10 items-center text-black ">
      <div className="flex items-center w-full m-2">
        <div className="hidden lg:flex m-4 text-xl font-medium">
          <button>
            <BiLeftArrow className="mr-4" />
          </button>
          <button>
            <BiRightArrow />
          </button>
        </div>
        <div className="lg:hidden sm:block pt-2">
          <button>
            <CgMenuHotdog className="text-5xl " />
          </button>
        </div>
        <SearchInput />
        <div className="text-right w-full px-4">User</div>
      </div>
    </div>
  );
};

export default Header;
