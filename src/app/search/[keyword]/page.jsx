import MovieList from "@/app/components/MovieList";
import { getMoviesResponse } from "@/app/libs/api-libs";
import React from "react";

export default async function Search({ params }) {

  const searchMovies = await getMoviesResponse("search/movie", `query=${params.keyword}`);

  const decodedSearchTerm = decodeURIComponent(params.keyword);

  return (
    <>
      <p className="px-8 pt-4 text-xl font-semibold">
        {`Searching for `}
        <em>{decodedSearchTerm}</em>
        {/* {`... (showing ${searchMovies.results.length} results)`} */}
      </p>
      <MovieList api={searchMovies.results} />
    </>
  );
}
