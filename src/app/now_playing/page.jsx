import MovieList from "../components/MovieList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { getNowPlayingResponse } from "../libs/api-libs";

const Page = async() => {
  const nowPlayingMovies = await getNowPlayingResponse("movie/now_playing")

  return (
    <>
      <HeaderMenu title="Now Playing"/>
      <MovieList api={nowPlayingMovies.results} />
    </>
  );
};

export default Page;
