import Link from "next/link";
import React from "react";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl md:mx-auto items-center py-6">
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden md:inline">Clone</span>
          </h2>
        </Link>
      </div>
      <div className="flex"></div>
      <div className="flex items-center space-x-5">
        <div>
          <Link href="/" className="mx-4 hover:text-amber-600 inline">
            <AiFillHome className="text-2xl inline mr-1" />
            <p className="text-sm hidden md:inline my-2">Home</p>
          </Link>
        </div>
        <div>
          <Link href="/about" className="mx-4 hover:text-amber-600 inline">
            <AiOutlineInfoCircle className="text-2xl inline mr-1" />
            <p className="text-sm hidden md:inline my-2">About</p>
          </Link>
        </div>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
