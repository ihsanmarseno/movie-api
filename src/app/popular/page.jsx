import MovieList from "../components/MovieList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { getMoviesResponse } from "../libs/api-libs";

const Page = async() => {
  const popularMovies = await getMoviesResponse("movie/popular")

  return (
    <>
      <HeaderMenu title="Popular Movies"/>
      <MovieList api={popularMovies.results} />
    </>
  );  
};

export default Page;
