import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import useOnClickOutside from "@/hooks/useOnClinkOutSide";

interface props {
  index: number;
}

const SongPopUp = ({ index }: props) => {
  const buttonRef = useRef<any>();
  const [isOpen, setOpen] = useState<boolean>(false);
  useOnClickOutside(buttonRef, () => {
    let a = { index };
    let drop = document.getElementById(a.index.toString());
    drop?.classList.add("hidden");
    setOpen(false);
  });

  useEffect(() => {
    return () => {};
  }, [isOpen]);

  const handleClick = () => {
    let a = { index };
    let drop = document.getElementById(a.index.toString());
    if (!isOpen) {
      drop?.classList.remove("hidden");
      setOpen(true);
    } else {
      drop?.classList.add("hidden");
      setOpen(false);
    }
  };

  return (
    <div ref={buttonRef}>
      <div className="flex justify-center">
        <div>
          <div className="relative">
            <button
              onClick={handleClick}
              className="flex items-center whitespace-nowrap rounded bg-primary leading-normal text-white motion-reduce:transition-none"
              type="button"
            >
              <BsThreeDots></BsThreeDots>
            </button>
            <ul
              id={index.toString()}
              className="absolute hidden right-5 top-[-10px] z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Add to playlist
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Go to album
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Add to queue
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPopUp;
