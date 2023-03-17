import ItemTitle from "@/components/ItemTitle";
import React, { useEffect, useState } from "react";
import * as albumService from "../../services/albumService";
import { useRouter } from "next/router";
import AlbumList from "@/components/AlbumList";
import MainLayout from "@/layouts/MainLayout";

const GenreAlum = () => {
  const [albumList, setAlbumList] = useState<
    {
      name: string;
      author: string;
      img: string;
      type: string;
      description: string;
    }[]
  >([]);
  const [count, setCount] = useState();
  const router = useRouter();

  const { genre } = router.query;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await albumService.getAlbumType(genre, 0);
      setAlbumList(response);
      setCount(response.length);
    };
    fetchApi();
  }, [count]);

  return (
    <MainLayout>
      <div className="h-max px-0 md:px-8">
        <ItemTitle
          name={genre?.toString() || ""}
          url={"/genre/" + genre}
        ></ItemTitle>
        <div className="grid h-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 w-full">
          {/* sing of type */}
          {albumList?.map((dataE, index2) => {
            return (
              <div key={index2} className="m-0 2xl:my-4 2xl:mx-4">
                <AlbumList
                  name={dataE.name}
                  description={dataE.description}
                  imgSrc={dataE.img}
                ></AlbumList>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default GenreAlum;
