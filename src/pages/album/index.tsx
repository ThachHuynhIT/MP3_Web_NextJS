import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { SongsList } from "@/components/SongsList";

const index = () => {
  return (
    <div>
      <MainLayout>
        <SongsList></SongsList>
      </MainLayout>
    </div>
  );
};

export default index;
