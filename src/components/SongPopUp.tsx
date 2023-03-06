import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface props {
  index: any;
}

const SongPopUp = ({ index }: props) => {
  const handleClick = () => {
    let a = { index };
    let drop = document.getElementById(a.toString());
    console.log(a);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="relative">
            <button
              onClick={handleClick}
              className="flex items-center whitespace-nowrap rounded bg-primary leading-normal text-white motion-reduce:transition-none"
              type="button"
            >
              {index}
              <BsThreeDots></BsThreeDots>
            </button>
            <ul
              id={index}
              className="absolute right-5 top-[-10px] z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                >
                  Something else here
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
