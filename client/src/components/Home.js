import React from 'react';

import Header from './Header';
import Movie from './Movie';
import Footer from './Footer';
import Pagination from './Pagination';

import { useUpcomingMovies } from '../customHooks/useUpcomingMovies';

const MoviesHome = () => {
  const { loading, movies, imageBaseUrl } = useUpcomingMovies();

  return (
    <div className="page-container">
      <Header />
      <main className="cards-container">
        {loading && <span>Loading...</span>}
        {movies && movies.map(movie => <Movie key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />)}
      </main>
      <Pagination />
      <Footer />
    </div>
  );
};

export default MoviesHome;
