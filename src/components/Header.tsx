import React from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

// rafce
const Header = () => {
  return (
    <div className="bg-white flex w-full items-center top-0 left-0 text-black flex-none">
      <div className="flex items-center">
        <RxDoubleArrowLeft /> <RxDoubleArrowRight />
        <div className="text-right">User</div>
      </div>
    </div>
  );
};

export default Header;
