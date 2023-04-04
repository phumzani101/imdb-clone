"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <div className="">
        <Link
          href="/?genre=fetchTrend"
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            genre &&
            genre === "fetchTrend" &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
        >
          Trending
        </Link>
      </div>
      <div className="">
        <Link
          href="/?genre=fetchTopRated"
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            genre &&
            genre === "fetchTopRated" &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
        >
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
