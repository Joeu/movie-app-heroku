import React from 'react';
import applogo from '../popcorn.png';
import tmdblogo from '../tmdblogo.png';

import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={applogo} alt="App logo" className="logo__img" />
      </div>
      <Search />
      <nav className="navigation">
        <img className="footer__tmdb-logo" src={tmdblogo} alt="The movie database" onClick={() => window.open('https://developers.themoviedb.org/3/getting-started')} />
      </nav>
    </header>
  );
};

export default Header;
