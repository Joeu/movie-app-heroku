import React from 'react';
import ReactDOM from 'react-dom';

import imdblogo from '../imdb-logo.png';

const MovieModal = ({ isVisible, hide, movieInfo, imageBaseUrl }) =>
  isVisible
    ? renderModalContent({ hide, movieInfo, imageBaseUrl })
    : null;

const renderModalContent = ({ hide, movieInfo, imageBaseUrl }) => ReactDOM.createPortal(
  <>
    <div className="modal" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal__content">

        <button type="button" className="modal__close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>

        <section className="modal__header">
          <div className="modal__title">{movieInfo.title}</div>
          <div className="modal__release-date">{`- (${movieInfo.release_date.slice(0, 4)})`}</div>
          <div className="modal__vote-average">{movieInfo.vote_average} &#9733;</div>
          <div className="modal__vote-count">{movieInfo.vote_count} - votes</div>
        </section>

        <section className="modal__info">
          <img className="modal__backdrop" src={`${imageBaseUrl}${movieInfo.backdrop_path}`} alt={movieInfo.title} />

          <div className="modal__overview">
            <p>{movieInfo.overview}</p>
            <p>Original Language: {movieInfo.original_language}</p>
            <p className="modal__imdb-link">Open with<img className="modal__imdb-logo" src={imdblogo} alt="IMDb" onClick={() => window.open(`https://www.imdb.com/title/${movieInfo.imdb_id}`)} /></p>
          </div>
        </section>

      </div>
    </div>
  </>, document.body
);

export default MovieModal;