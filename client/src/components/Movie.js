import React, { useState } from 'react';

import useModal from '../customHooks/useModal';
import MovieModal from './MovieModal';

import { SERVER_BASE_URL } from '../utils/constants';

const Movie = ({ movie, imageBaseUrl }) => {
  const [movieInfo, setMovieInfo] = useState(movie);

  const { isVisible, toggle } = useModal();

  const fetchMovieInfo = () => {
    toggle();
    fetch(`${SERVER_BASE_URL}/${movie.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovieInfo(data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={`${imageBaseUrl}${movie.poster_path}`} onClick={fetchMovieInfo} alt={movie.title} />
      <MovieModal
        movieInfo={movieInfo}
        isVisible={isVisible}
        hide={toggle}
        imageBaseUrl={imageBaseUrl}
      />
    </div>
  )
}

export default Movie;