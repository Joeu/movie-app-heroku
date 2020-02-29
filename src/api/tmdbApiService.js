import axios from 'axios';
import nodeCache from 'node-cache';
import {
  UPCOMING_MOVIES_URL,
  MOVIE_POSTER_BASE_URL,
  UPCOMING_CACHE_KEY,
  MOVIE_SEARCH_BASE_URL,
  MOVIE_INFO_ID_URL,
  API_KEY_QUERY,
  TTL_CACHE
} from '../utils/constants';

/**
 * Service responsible for caching the results, avoiding repeated calls to the TMDB API server
 */
const cacheService = new nodeCache({ stdTTL: TTL_CACHE });

export const fetchUpcoming = async () => {
  try {
    const cachedMovies = cacheService.get(UPCOMING_CACHE_KEY);

    if (cachedMovies) {
      return cachedMovies;
    } else {
      const response = await axios.get(UPCOMING_MOVIES_URL);
      cacheService.set(UPCOMING_CACHE_KEY, response.data);
      return response.data;
    }
  } catch (err) {
    (err);
  };
}

export const fetchMoviePoster = async (size, imagePath) => {
  try {
    const moviePoster = await axios.get(`${MOVIE_POSTER_BASE_URL}w${size}/${imagePath}`);
    return moviePoster;
  } catch (err) {
    console.log(err);
  }
}

export const fetchMovieInfo = async (id) => {
  try {
    const cachedMovie = await filterCachedId(id);
    if (cachedMovie) {
      return cachedMovie;
    } else {
      const search = await axios.get(`${MOVIE_INFO_ID_URL}${id}?${API_KEY_QUERY}`);
      return search.data;
    }
  } catch (err) {
    console.log(err);
  }
}

export const searchByName = async (title) => {
  try {
    const search = await axios.get(`${MOVIE_SEARCH_BASE_URL}&query=${title}`);
    return search.data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchPage = async ({ page, parsedFromSearch, title }) => {
  try {
    const paginationUrl = parsedFromSearch
      ? `${MOVIE_SEARCH_BASE_URL}&query=${title}&page=${page}`
      : `${UPCOMING_MOVIES_URL}&page=${page}`
    const pageResults = await axios.get(paginationUrl);
    return pageResults.data;
  } catch (err) {
    console.log(err);
  }
}

const filterCachedId = async (id) =>
  cacheService.get(UPCOMING_CACHE_KEY)
  && cacheService.get(UPCOMING_CACHE_KEY).results
  && cacheService.get(UPCOMING_CACHE_KEY).filter(movie => movie.id === id)[0];
