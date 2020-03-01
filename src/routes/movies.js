import { Router } from 'express';

import { imagePath } from '../middlewares/imagePath';


import { fetchUpcoming, fetchMovieInfo, fetchMoviePoster, fetchPage, searchByName } from '../api/tmdbApiService';

const router = Router();

router.use(imagePath);

/**
 * List the most recent movies
 */
router.get('/upcoming', (req, res) => {
  fetchUpcoming()
    .then(data => res.send({ ...data, imageBaseUrl: req.imageBaseUrl }))
    .catch(err => console.log(err));
});

/**
 * Searchs for a movie by the name
 */
router.get('/search', (req, res) => {
  searchByName(req.query.title)
    .then(data => res.send({ ...data, imageBaseUrl: req.imageBaseUrl }))
    .catch(err => console.log(err));
});

/**
 * List the most recent movies
 */
router.get('/pagination', (req, res) => {
  const { page, fromSearch, title } = req.query;
  const parsedFromSearch = fromSearch === 'true';
  fetchPage({ page, parsedFromSearch, title })
    .then(data => res.send({ ...data, imageBaseUrl: req.imageBaseUrl }))
    .catch(err => console.log(err));
});

/**
 * Get information about a given movie
 */
router.get('/:id', (req, res, next) => {
  fetchMovieInfo(req.params.id)
    .then(data => res.send({ ...data, imageBaseUrl: req.imageBaseUrl }))
    .catch(err => console.log(err));
});

export default router;