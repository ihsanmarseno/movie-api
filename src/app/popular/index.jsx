import React from "react";
import MovieList from "../components/MovieList";

export default function PopularMovies({ api , title}) {
  return (
    <>
    <p className="pt-4 pl-8 text-xl font-semibold">{title}</p>
    <div className="grid flex-wrap lg:gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
      {api.results.map((movie) => {
        return (
          <div
            key={movie.id}
            className="transition m-8 rounded-lg bg-[#739072] shadow-lg hover:scale-110 hover:duration-500"
          >
            <MovieList title={movie.title} poster_path={movie.poster_path} />
          </div>
        );
      })}
    </div>
    </>
  );
}
