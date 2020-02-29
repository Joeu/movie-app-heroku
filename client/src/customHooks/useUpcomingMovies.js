import { useEffect } from 'react';
import { fetchUpcomingMovies } from '../api/apiService';
import { useMoviesContext } from './useMoviesContext';

export const useUpcomingMovies = () => {
  const { state, dispatch } = useMoviesContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const payload = await fetchUpcomingMovies();
      dispatch({
        type: 'UPCOMING_MOVIES',
        payload: {
          ...payload,
          fromSearch: false,
        },
      });
    }
    fetchMovies();
  }, [dispatch]);

  const { movies, loading, totalPages, numResults, imageBaseUrl } = state;

  return {
    movies,
    loading,
    totalPages,
    numResults,
    imageBaseUrl
  }

}