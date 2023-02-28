import React from "react";

interface props {
  typeOfList: string;
}

const AlbumListHeader = ({ typeOfList }: props) => {
  return (
    <div className="flex content-between font-bold text-white text-2xl mb-5 w-full mt-3">
      <div className="w-1/2">{typeOfList}</div>
      <button className="text-right w-1/2">Xem thêm</button>
    </div>
  );
};

export default AlbumListHeader;
