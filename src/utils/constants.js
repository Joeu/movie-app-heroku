import 'dotenv/config';

export const TTL_CACHE = 3600;
export const UPCOMING_CACHE_KEY = 'upcoming';

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY_QUERY = `api_key=${process.env.TMDB_API_KEY}`;

export const UPCOMING_MOVIES_URL = `${TMDB_BASE_URL}/movie/upcoming?${API_KEY_QUERY}`;
export const UPCOMING_MOVIES_PAGINATION_URL = `${UPCOMING_MOVIES_URL}?page=`;

export const MOVIE_SEARCH_BASE_URL = `${TMDB_BASE_URL}/search/movie?${API_KEY_QUERY}`;
export const MOVIE_SEARCH_PAGINATION_URL = `${MOVIE_SEARCH_BASE_URL}?page=`;

export const MOVIE_POSTER_SIZE = 'w300';
export const MOVIE_POSTER_BASE_URL = `https://image.tmdb.org/t/p/${MOVIE_POSTER_SIZE}`;
export const MOVIE_INFO_ID_URL = `${TMDB_BASE_URL}/movie/`;
