import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { SongsList } from "@/components/SongsList";
import { useRouter } from "next/router";

const PageAlbum = () => {
  const router = useRouter();
  const { album } = router.query;

  return (
    <MainLayout>
      <SongsList page={1000} albumName={album || " "}></SongsList>
    </MainLayout>
  );
};

export default PageAlbum;
