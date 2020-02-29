import React from 'react';

import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg">
        <i className="fa fa-film" />
        <h1> Searcher</h1>
      </div>
      <nav className="navigation">
        <a href="!#">
          <h1>HOME</h1>
        </a>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
