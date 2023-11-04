import MovieList from "./components/MovieList";
import PopularMovies from "./popular";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const popularMovies = await response.json();

  return (
    <div>
      <PopularMovies api={popularMovies} title="Popular Movies" />
    </div>
  );
}
