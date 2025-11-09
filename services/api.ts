
import Constants from "expo-constants";
const token = Constants.expoConfig?.extra?.tmdbToken;
const apiKey = Constants.expoConfig?.extra?.appwriteProjectId;
console.log("TMDB TOKEN:", Constants.expoConfig?.extra?.tmdbToken);


export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  options:{
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
};



export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, TMDB_CONFIG.options);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};


export const fetchMovieDetails = async(movieId:string):Promise<MovieDetails>=>{
  try{
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${apiKey}`,{
      method:'GET',
      headers:TMDB_CONFIG.options.headers
    })
    if(!response.ok){
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.log("Error fetching movie details:", error);
    throw error;
  }
}
