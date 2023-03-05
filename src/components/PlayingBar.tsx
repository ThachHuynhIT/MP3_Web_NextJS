import React, { useState, useRef, Ref } from "react";
import audios from "../../data/songs";
import {
  MdPlayCircleOutline,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineRepeat,
  MdOutlineShuffle,
  MdVolumeUp,
  MdVolumeDown,
  MdVolumeOff,
  MdPause,
} from "react-icons/md";

const PlayingBar = () => {
  const audioRef = useRef<any>();
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlay, setPlay] = useState<boolean>(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }: any) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="flex fixed text-[32px] text-white items-center justify-between bg-neutral-800 border-t-2 border-zinc-600	border-solid w-full bottom-0 h-20 p-2">
      <div className="text-base">PlayingBar</div>
      <div className="flex flex-col w-full md:w-[600px] items-center">
        <div className="flex mb-1">
          <div className="mx-4 active:scale-90">
            <MdOutlineShuffle />
          </div>
          <div className="mx-4 active:scale-90">
            <MdSkipPrevious />
          </div>
          <div className="mx-4 active:scale-90" onClick={handlePausePlayClick}>
            {isPlay ? <MdPause /> : <MdPlayCircleOutline />}
          </div>
          <div className="mx-4 active:scale-90">
            <MdSkipNext />
          </div>
          <div className="mx-4 active:scale-90">
            <MdOutlineRepeat />
          </div>
        </div>
        <div className="flex w-full text-sm">
          <audio
            ref={audioRef}
            src="https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3"
          ></audio>
          <div className="mb-1">0:00 {currentTime}</div>
          <input
            type="range"
            name="playback-bar"
            id="play-position"
            className="w-full mb-1 cursor-pointer mx-2"
          />
          <div>0:00</div>
        </div>
      </div>
      <div className="flex">
        <MdVolumeUp className="mx-4" />
        <MdVolumeDown className="mx-4" />
        <MdVolumeOff className="mx-4" />
      </div>
    </div>
  );
};

export default PlayingBar;
