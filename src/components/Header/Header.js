import React,  { useState, useEffect } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = (props) => {

  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const [moviesBackground, setMoviesBackground] = React.useState("#5C5C5C");
  
  
  useEffect(() => {
    const getMoviesUrl = window.location.pathname;
    if (getMoviesUrl === "/movies") {
      setMoviesBackground("#FFFFFF");
    }
  }, [moviesBackground]);


  function handleHamburgerOpen() {
    setIsHamburgerOpen(true)
  }

  function handleHamburgerClose() {
    setIsHamburgerOpen(false)
  }
  return (
    <header className="header" to="/movies" backgroundColor={moviesBackground} activeClassName="header_active">
      <Link to="/" className="logo"></Link>
      <div className="header__wrapper">
        <Navigation
          isAuth={props.isAuth}
          isOpenHamburger={isHamburgerOpen}
          onHamburgerOpen={handleHamburgerOpen}
          onHamburgerClose={handleHamburgerClose} />
      </div>
    </header>
  );
}