import { useState } from 'react';
import { searchByName } from '../api/apiService';
import { useMoviesContext } from './useMoviesContext';

export const useSearchMovies = () => {
  const [searchText, setSearchText] = useState('');
  const { dispatch } = useMoviesContext();

  const searchMovies = async () => {
    const payload = await searchByName(searchText);
    dispatch({
      type: 'SEACH_BY_NAME',
      payload: {
        ...payload,
        title: searchText,
        fromSearch: true,
      },
    });
    setSearchText('');
  }

  return {
    searchText,
    handleSearchInputChange: (e) => {
      setSearchText(e.target.value);
    },
    doSearch: (e) => {
      e.preventDefault();
      searchMovies();
    }
  }

}