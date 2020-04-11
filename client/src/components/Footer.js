import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">

      <section className="footer__external-links">
        <i className="footer__icon fa fa-github-alt" onClick={() => window.open('http://github.com/joeu')} />
        <i className="footer__icon fa fa-linkedin" onClick={() => window.open('http://www.linkedin.com/in/joeumar-souza/')} />
      </section>

      <section className="footer__credits">
        <ul className="footer__list">
          <li className="footer__item">Logo Icon made by <a className="footer__link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className="footer__link" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
          <li className="footer__item">Data served by <a className="footer__link" href="https://developers.themoviedb.org/3/getting-started" title="The Movid Database">The Movie Data Base</a></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
