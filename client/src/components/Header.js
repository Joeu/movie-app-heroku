import React from 'react';
import tmdblogo from '../tmdblogo.png'

import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg">
        <i className="fa fa-film" />
        <h1>Searcher</h1>
      </div>
      <nav className="navigation">
        <img src={tmdblogo} alt="The movie database" onClick={() => window.open('https://developers.themoviedb.org/3/getting-started')} />
        <Search />
      </nav>
    </header>
  );
};

export default Header;
