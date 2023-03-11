import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SearchCard = () => {
  const router = useRouter();

  let musicGenre = [
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
    {
      type: "Pop",
      img: "https://media.istockphoto.com/id/1289702539/vi/vec-to/vector-ph%C3%A1t-s%C3%A1ng-%C3%A1p-ph%C3%ADch-pop-music-b%E1%BB%99-ch%E1%BB%AF-c%C3%A1i-v%C3%A0-s%E1%BB%91-neon-m%C3%A0u-xanh.jpg?s=170667a&w=0&k=20&c=kYeNaNf7bE8yqe8T08tPPTdzW_losFoAT9zoyDXPVRU=",
    },
  ];
  return (
    <div className="search-card flex">
      <div className="flex flex-col text-white pl-3 pt-10 mx-8">
        <div className="font-bold text-2xl">Browse all</div>
        <div className="grid justify-items-stretch grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 mt-10">
          {musicGenre.map((genre, index) => {
            return (
              <div key={index}>
                <div
                  key={index}
                  className="relative rounded-t-lg w-5/6 h-48 my-4 active:scale-95"
                  onClick={() => router.push("#")}
                >
                  <div className="absolute bottom-5 right-6 text-2xl font-bold">
                    {genre.type}
                  </div>
                  <Image
                    className="rounded-t-lg h-48"
                    src={genre.img}
                    alt=""
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
