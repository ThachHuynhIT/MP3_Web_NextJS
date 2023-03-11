import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchResult from "@/components/SearchResult";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { search } = router.query || "";

  return (
    <main className="flex relative text-sm bg-zinc-800 w-full ">
      <MainLayout>
        <SearchResult keyword={search?.toString() || ""} />
      </MainLayout>
    </main>
  );
};

export default Search;
