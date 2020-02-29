import { useContext } from 'react';
import { MoviesContext } from '../providers/moviesProvider';

export const useMoviesContext = () => {
  const moviesContext = useContext(MoviesContext);
  return {
    state: moviesContext[0],
    dispatch: moviesContext[1],
  }
}