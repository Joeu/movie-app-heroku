import React, { useReducer } from 'react';

import { moviesReducer } from './reducers/moviesReducer';
import { MoviesProvider } from './providers/moviesProvider';

import Home from './components/Home';

const initialState = {
  loading: false,
  movies: [],
  totalPages: 0,
  numResults: 0,
  fromSearch: false,
  currentPage: 0,
  imageBaseUrl: '',
  title: '',
};

const App = () => {
  const store = useReducer(moviesReducer, initialState);

  return (
    <MoviesProvider value={store}>
      <Home />
    </MoviesProvider>
  );
};

export default App;
