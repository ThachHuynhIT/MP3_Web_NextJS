import { useRouter } from "next/router";
import React from "react";

interface props {
  name: string;
  url: string;
}

const ItemTitle = ({ name, url }: props) => {
  const router = useRouter();

  return (
    <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-5">
      <div className="w-1/2">{name}</div>
      <button
        className="text-right w-1/2"
        onClick={() => router.push(url || "#")}
      >
        See more
      </button>
    </div>
  );
};

export default ItemTitle;
