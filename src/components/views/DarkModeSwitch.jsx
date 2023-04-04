"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MdLightMode className="text-2xl inline hover:text-amber-500" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MdDarkMode className="text-2xl inline hover:text-amber-500" />
        </button>
      )}
    </div>
  );
};

export default DarkModeSwitch;
