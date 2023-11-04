import MovieList from "@/app/components/MovieList";
import React from "react";

export default async function Search({ params }) {
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/search/movie?query=${params.keyword}&api_key=${process.env.NEXT_API_KEY}`
  );
  const searchMovies = await response.json();

  const decodedSearchTerm = decodeURIComponent(params.keyword);

  return (
    <>
      <p className="px-8 pt-4 text-xl font-semibold">
        {`Searching for... `}
        <em>{decodedSearchTerm}</em>
        {` (showing ${searchMovies.results.length} results)`}
      </p>

      <div className="grid grid-cols-1 lg:gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {searchMovies.results.map((movie) => {
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
