import React from "react";
import MovieList from "../components/MovieList";
import Link from "next/link";
import HeaderMenuHome from "../components/Utilities/HeaderMenuHome";

export default function HomePageMovies({ api, title, caption, resource }) {
  const limitedPopularMovies = api.results.slice(0, 4);

  return (
    <>
      <HeaderMenuHome title={title} caption={caption} resource={resource} />
      <MovieList api={limitedPopularMovies} />
    </>
  );
}
