export const getNowPlayingResponse = async (resource, query) => {
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

export const getPopularResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/${resource}?${query}&api_key=${process.env.NEXT_API_KEY}`
    );
    const popularMovies = await response.json();
    return popularMovies;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return null; 
  }
};

export const getUpcomingResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/${resource}?${query}&api_key=${process.env.NEXT_API_KEY}`
    );
    const upcomingMovies = await response.json();
    return upcomingMovies;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return null; 
  }
};

export const getSearchMoviesResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/${resource}?query=${query}&api_key=${process.env.NEXT_API_KEY}`
    );
    const searchMovies = await response.json();
    return searchMovies;
  } catch (error) {
    console.error("Error fetching search movies:", error);
    return null; 
  }
};

export const getDetailMoviesResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL}/${resource}?append_to_response=${query}&api_key=${process.env.NEXT_API_KEY}`
    );
    const detailMovies = await response.json();
    return detailMovies;
  } catch (error) {
    console.error("Error fetching detail of movies:", error);
    return null; 
  }
};
