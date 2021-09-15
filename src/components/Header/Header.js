import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = (props) => {

  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  function handleHamburgerOpen() {
    setIsHamburgerOpen(true)
  }

  function handleHamburgerClose() {
    setIsHamburgerOpen(false)
  }
  return (
    <header className={`header ${props.moviesBackground}`}>
      <Link to="/" className="logo"/>
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
