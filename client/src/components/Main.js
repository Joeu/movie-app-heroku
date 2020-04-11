import React from 'react';
import Card from './Card';

import { useUpcomingMovies } from '../customHooks/useUpcomingMovies';

const Main = () => {
  const { loading, movies, imageBaseUrl } = useUpcomingMovies();

  return (
    <main className="cards-container">
      {loading && <span>Loading...</span>}
      {movies && movies.map(movie => <Card key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />)}
    </main>
  );
};

export default Main;
