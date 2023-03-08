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
import Image from "next/image";

const PlayingBar = () => {
  const audioRef = useRef<any>();
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlay, setPlay] = useState<boolean>(false);
  const [random, setRandom] = useState<boolean>(false);

  function formatTime(sec_num: any) {
    let hours: any = Math.floor(sec_num / 3600);
    let minutes: any = Math.floor((sec_num - hours * 3600) / 60);
    let seconds: any = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > "0" ? 0 + hours : 0) : hours;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
  }

  const showTime = () => {
    if (duration !== undefined) {
      return formatTime(duration);
    } else {
      return <div>00:00</div>;
    }
  };

  const showCurrentTime = () => {
    if (currentTime !== undefined) {
      return formatTime(currentTime);
    } else {
      return <div>00:00</div>;
    }
  };

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

  const handleTimeSliderChange = ({ e }: any) => {
    const input = document.getElementById(
      "play-position"
    ) as HTMLInputElement | null;
    audioRef.current.currentTime = Number(input?.value);
    setCurrentTime(Number(input?.value));

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const nextSong = () => {
    setAudioIndex((audioIndex + 1) % audios.length);
  };

  const audioControl = (e: any) => {
    audioRef.current.volume = e.target.value / 100;

    const vl1 = document.getElementById("vl1");
    const vl2 = document.getElementById("vl2");
    const vl3 = document.getElementById("vl3");

    if (e.target.value == 0) {
      vl3?.classList.remove("hidden");
      vl2?.classList.add("hidden");
      vl1?.classList.add("hidden");
    } else if (e.target.value > 60) {
      vl1?.classList.remove("hidden");
      vl2?.classList.add("hidden");
      vl3?.classList.add("hidden");
    } else {
      vl2?.classList.remove("hidden");
      vl3?.classList.add("hidden");
      vl1?.classList.add("hidden");
    }
  };

  return (
    <div className="flex fixed text-[32px] text-white items-center justify-between bg-neutral-800 border-t-2 border-zinc-600	border-solid w-full bottom-0 h-20 p-2">
      <div className="text-lg w-[400px] flex items-center">
        <Image
          priority
          className="rounded-t-lg ml-1 mr-3 w-[50px] h-[50px] object-cover"
          src={audios[audioIndex].links.images[1].url}
          alt=""
          width={50}
          height={50}
        ></Image>
        {audios[audioIndex].name}
      </div>
      <div className="flex flex-col w-full md:w-[600px] items-center">
        <div className="flex mb-1">
          <div className="mx-4 active:scale-90">
            <MdOutlineShuffle />
          </div>
          {audioIndex > 0 ? (
            <div
              className="mx-4 active:scale-90"
              onClick={() => {
                setAudioIndex((audioIndex - 1) % audios.length);
              }}
            >
              <MdSkipPrevious />
            </div>
          ) : (
            <MdSkipPrevious className="mx-4 cursor-not-allowed brightness-50" />
          )}

          <div className="mx-4 active:scale-90" onClick={handlePausePlayClick}>
            {isPlay ? <MdPause /> : <MdPlayCircleOutline />}
          </div>
          <div className="mx-4 active:scale-90" onClick={nextSong}>
            <MdSkipNext />
          </div>
          <div className="mx-4 active:scale-90">
            <MdOutlineRepeat />
          </div>
        </div>
        <div className="flex w-full text-sm">
          <audio
            controls
            hidden
            ref={audioRef}
            src={audios[audioIndex].url}
            onLoadedData={handleLoadedData}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onEnded={nextSong}
            // preload="auto"
          />
          <div className="mb-1">{showCurrentTime()}</div>
          <input
            value={currentTime}
            max={duration}
            onChange={(e) => handleTimeSliderChange(e)}
            type="range"
            name="playback-bar"
            id="play-position"
            className="w-full mb-1 cursor-pointer mx-2"
          />
          <div>{showTime()}</div>
        </div>
      </div>
      <div className="flex w-[400px] justify-end">
        <input
          type="range"
          name="audioControl"
          id="audio-control"
          min={0}
          max={100}
          onChange={audioControl}
        />
        <MdVolumeUp className="mx-4 w-1/12" id="vl1" />
        <MdVolumeDown className="mx-4 hidden" id="vl2" />
        <MdVolumeOff className="mx-4 hidden" id="vl3" />
      </div>
    </div>
  );
};

export default PlayingBar;
