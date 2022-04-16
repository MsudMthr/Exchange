import React from "react";

import useDarkMode from "../hooks/useDarkMode";

const DarkMode = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      {
        <span
          onClick={() => setTheme(colorTheme)}
          className={`${
            colorTheme === "dark" ? "bg-amber-100" : "bg-gray-900"
          } w-16 h-8 text-lg transition-all delay-150 rounded-full select-none cursor-pointer flex  items-center `}
        >
          {colorTheme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-h-7  p-1 rounded-full translate-x-1 transition-all ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-8 w-h-8 font-bold text-yellow-300 p-1 rounded-full translate-x-8 transition-all ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </span>
      }
    </div>
  );
};

export default DarkMode;
