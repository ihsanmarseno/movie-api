import MovieList from "../components/MovieList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { getMoviesResponse } from "../libs/api-libs";

const Page = async() => {
  const nowPlayingMovies = await getMoviesResponse("movie/now_playing")

  return (
    <>
      <HeaderMenu title="Now Playing"/>
      <MovieList api={nowPlayingMovies.results} />
    </>
  );
};

export default Page;
