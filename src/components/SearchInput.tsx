import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.replace({
      pathname: "/search/[search]",
      query: { search },
    });
  };

  return (
    <div className="relative">
      <form onSubmit={onSubmit}>
        <input
          value={search}
          type="search"
          onChange={handleChange}
          className="border w-[200px] sm:w-80 border-black rounded-3xl ml-2 pl-10 pr-2 pt-2 pb-2"
        />
        <FaSearch className="absolute top-3 left-6 text-lg" />
      </form>
    </div>
  );
};

export default SearchInput;
