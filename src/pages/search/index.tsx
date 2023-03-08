import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchCard from "@/components/SearchCard";

const Search = () => {
  return (
    <main className="flex relative text-sm bg-zinc-800 w-full h-screen">
      <MainLayout>
        <SearchCard></SearchCard>
      </MainLayout>
    </main>
  );
};

export default Search;
