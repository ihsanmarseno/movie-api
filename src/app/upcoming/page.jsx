import MovieList from "../components/MovieList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { getMoviesResponse } from "../libs/api-libs";

const Page = async() => {
  const upcomingMovies = await getMoviesResponse("movie/upcoming")

  return (
    <>
      <HeaderMenu title="Upcoming Movies"/>
      <MovieList api={upcomingMovies.results} />
    </>
  );
};

export default Page;
