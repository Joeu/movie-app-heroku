import { MOVIE_POSTER_BASE_URL } from '../utils/constants';

export const imagePath = (req, res, next) => {
  req.imageBaseUrl = MOVIE_POSTER_BASE_URL;
  next();
}