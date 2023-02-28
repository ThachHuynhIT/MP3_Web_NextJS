import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className="border w-80 border-black rounded-3xl ml-2 pl-10 pr-2 pt-3 pb-2"
      />
      <FaSearch className="absolute top-3 left-6 text-lg" />
    </div>
  );
};

export default SearchInput;
