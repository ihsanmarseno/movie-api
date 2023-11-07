import { getPopularResponse } from "./libs/api-libs";
import HomePageMovies from "./homepage";

export default async function Home() {
  const limitedPopularMovies = await getPopularResponse(
    "movie/popular",
    "page=1"
  );
  const limitedUpcomingMovies = await getPopularResponse(
    "movie/upcoming",
    "page=1"
  );

  const limitedNowPlayingMovies = await getPopularResponse(
    "movie/now_playing",
    "page=1"
  );

  return (
    <div>
      <HomePageMovies
        api={limitedPopularMovies}
        title="Popular Movies"
        caption="Show All"
        resource="popular"
      />
      <HomePageMovies
        api={limitedUpcomingMovies}
        title="Upcoming Movies"
        caption="Show All"
        resource="upcoming"
      />
      <HomePageMovies
        api={limitedNowPlayingMovies}
        title="Now Playing"
        caption="Show All"
        resource="now_playing"
      />
    </div>
  );
}
