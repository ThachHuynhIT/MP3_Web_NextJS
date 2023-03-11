import React from "react";
import { SongsList } from "@/components/SongsList";
import MainLayout from "../../layouts/MainLayout";

const index = () => {
  return (
    <div>
      <MainLayout>
        <SongsList page={1000}></SongsList>
      </MainLayout>
    </div>
  );
};

export default index;
