import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchResult from "@/components/SearchResult";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { search } = router.query || "";

  return (
    <div>
      <MainLayout>
        <SearchResult keyword={search?.toString() || ""} />
      </MainLayout>
    </div>
  );
};

export default Search;
