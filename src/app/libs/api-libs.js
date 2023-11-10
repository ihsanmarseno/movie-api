export const getMoviesResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/${resource}?${query}&api_key=${process.env.NEXT_API_KEY}`
    );
    const nowPlayingMovies = await response.json();
    return nowPlayingMovies;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    return null; 
  }
};