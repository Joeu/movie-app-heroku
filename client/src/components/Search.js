import React from 'react';
import { useSearchMovies } from '../customHooks/useSearchMovies';

const Search = () => {
  const { searchText, handleSearchInputChange, doSearch } = useSearchMovies();

  return (
    <form onSubmit={doSearch}>
      <input
        value={searchText}
        placeholder="Search..."
        onChange={handleSearchInputChange}
        type="text"
      />
      <i onClick={doSearch} className="fa fa-search" />
    </form>
  );
};

export default Search;
