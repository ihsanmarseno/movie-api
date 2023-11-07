import MovieList from "../components/MovieList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { getUpcomingResponse } from "../libs/api-libs";

const Page = async() => {
  const upcomingMovies = await getUpcomingResponse("movie/upcoming")

  return (
    <>
      <HeaderMenu title="Upcoming Movies"/>
      <MovieList api={upcomingMovies.results} />
    </>
  );
};

export default Page;
