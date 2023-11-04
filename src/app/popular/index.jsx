import React from "react";
import MovieList from "../components/MovieList";
import Link from "next/link";

export default function LimitedPopularMovies({ api, title, caption }) {
  const limitedMovies = api.results.slice(0, 8);

  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <p className="ml-8 text-xl font-semibold">{title}</p>
        <Link href="/popular" className="mr-8 text-white underline">
            {caption}
        </Link>
      </div>
      <div className="grid flex-wrap lg:gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {limitedMovies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="transition m-8 rounded-lg bg-[#435585] shadow-lg hover:scale-110 hover:duration-500"
            >
              <MovieList
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
