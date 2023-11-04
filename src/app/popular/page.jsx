import React from "react";
import MovieList from "../components/MovieList";

export default async function PopularMovies() {
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const popularMovies = await response.json();

  return (
    <div>
      <p className="pt-4 pl-8 text-2xl font-semibold">Popular Movies</p>
      <div className="grid grid-cols-1 lg:gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
      {popularMovies.results.map((movie) => {
        return (
          <div
            key={movie.id}
            className="transition m-8 rounded-lg bg-[#435585] shadow-lg hover:scale-110 hover:duration-500"
          >
            <MovieList title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
          </div>
        );
      })}
    </div>
    </div>
  );
}
