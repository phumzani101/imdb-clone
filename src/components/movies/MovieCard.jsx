import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  const imageSrc = `https://image.tmdb.org/t/p/original/${
    movie.backdrop_path || movie.poster_path
  }`;
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={imageSrc}
          alt={movie.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <h2 className="truncate text-sm font-bold">
            {movie.title || movie.name}
          </h2>
          <p>{movie.release_date || movie.first_air_date}</p>
          <p className="flex items-center">
            <AiFillLike className="h-5 mr-1 ml-3" /> {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
