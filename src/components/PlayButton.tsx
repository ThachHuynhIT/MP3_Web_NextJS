import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { selectPlaying, setPlayingSong } from "slices/playingSlice";

interface props {
  song: Array<{
    name: string;
    author: string;
    links: { images: Array<{ url: string }> };
  }>;
  icon: IconType;
}

interface songSlice {
  album: string;
  name: string;
  url: string;
  author: string;
  views: number;
  links: {
    images: Array<{
      url: string;
    }>;
  };
}

interface song {
  name: string;
  author: string;
  links: {
    images: Array<{
      url: string;
    }>;
  };
}

const PlayButton = ({ icon: Icon, song }: props) => {
  const router = useRouter();
  const songList = useSelector(selectPlaying);

  console.log(songList);

  const handleClick = () => {
    console.log(song);
    // if (song.length > 0) {
    //   dispatch(setPlayingSong(song));
    // }
  };

  return (
    <div>
      <div className="space-y-4 ">
        <button
          onClick={handleClick}
          className="flex items-center space-x-2 hover:text-white py-2 active:scale-90"
        >
          <Icon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PlayButton;
function dispatch(arg0: { payload: any; type: "counter/setPlayingSong" }) {
  throw new Error("Function not implemented.");
}
