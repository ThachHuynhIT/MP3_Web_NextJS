import React from "react";
import MainLayout from "../layouts/MainLayout";
import SearchCard from "@/components/SearchCard";

const Search = () => {
  return (
    <main className="flex relative bg-zinc-800 w-full h-screen overflow-y-scroll">
      <MainLayout>
        <SearchCard></SearchCard>
      </MainLayout>
    </main>
  );
};

export default Search;
