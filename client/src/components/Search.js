import React from 'react';
import { useSearchMovies } from '../customHooks/useSearchMovies';

const Search = () => {
  const { searchText, handleSearchInputChange, doSearch } = useSearchMovies();

  return (
    <form className="search-form" onSubmit={doSearch}>
      <input
        className="search-form__input"
        value={searchText}
        placeholder="Search..."
        onChange={handleSearchInputChange}
        type="text"
      />
      <i onClick={doSearch} className="search-form__icon fa fa-search" />
    </form>
  );
};

export default Search;
