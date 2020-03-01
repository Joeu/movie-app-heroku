import React from 'react';
import ReactDOM from 'react-dom';

const MovieModal = ({ isVisible, hide, movieInfo, imageBaseUrl }) =>
  isVisible
    ? renderModalContent({ hide, movieInfo, imageBaseUrl })
    : null;

const InfoRow = (info, content) => (
  <span className="info-row">
    <h2>{info}</h2>
    <p>
      {content}
    </p>
  </span>
)

const renderModalContent = ({ hide, movieInfo, imageBaseUrl }) => ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <h2>{movieInfo.title}</h2>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img src={`${imageBaseUrl}${movieInfo.backdrop_path}`} alt={movieInfo.title} />
        {InfoRow('Original language:', movieInfo.original_language)}
        {InfoRow('Rating:', movieInfo.vote_average)}
        {InfoRow('Budget: $USD:', movieInfo.budget)}
        {InfoRow('Votes:', movieInfo.vote_count)}
        {InfoRow('Release date:', movieInfo.release_date)}
        {InfoRow('Sinopse:', movieInfo.overview)}
      </div>
    </div>
  </React.Fragment>, document.body
);

export default MovieModal;