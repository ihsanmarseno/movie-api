import LimitedPopularMovies from "./popular";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const limitedPopularMovies = await response.json();

  return (
    <div>
      <LimitedPopularMovies api={limitedPopularMovies} title="Popular Movies" caption="Show All" />
    </div>
  );
}
