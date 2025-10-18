export const TMBD_config = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_BEARER_TOKEN}`,
    }
};

export const fetchingMovies = async ({query}:{query:string}) => {
    const endpoint = query ? `${TMBD_config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : '${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc';
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBD_config.headers,
    })
    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmNhYjg3MWZkMjcyYTQxYmJkZGIxYTQzNmJmZjk0NyIsIm5iZiI6MTc2MDc3MzA4NS45MjYsInN1YiI6IjY4ZjM0M2RkOWI2ZDA1ZGQ2OWM2ZmM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.26clqqjgqGX2Tp8zmmdqtI12CWDqGmzDOHLHyxl2mHs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));