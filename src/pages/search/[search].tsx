import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchCard from "@/components/SearchCard";
import SearchResult from "@/components/SearchResult";

const Search = () => {
  return (
    <main className="flex relative text-sm bg-zinc-800 w-full ">
      <MainLayout>
        <SearchResult />
      </MainLayout>
    </main>
  );
};

export default Search;
