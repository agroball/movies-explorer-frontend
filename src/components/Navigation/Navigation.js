import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { Hamburger } from '../Hamburger/Hamburger';

export const Navigation = (props) => {
	return (
    <>
      {props.isAuth && <nav className="navigation">
        <div className="navigation__wrapper navigation__wrapper_hidden">
          <NavLink to="/movies" className="navigation__link" exact activeClassName="navigation__link_active">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link" exact activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
        </div>
        <div className="navigation__wrapper navigation__wrapper_hidden">
          <NavLink to="/profile" className="navigation__link navigation__link_with_signin" exact activeClassName="navigation__link_account">Аккаунт</NavLink>
          <div className="navigation__img"></div>
        </div>
        <Hamburger class="header__hamburger header__hamburger_with_signin" onHamburgerOpen={props.onHamburgerOpen} />
      </nav>}
      {!props.isAuth && <nav className="navigation navigation_without_signin" >
        <div className="navigation__wrapper navigation__wrapper_without_signin">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_type_button">Войти</Link>
        </div>
      </nav>}

      <div className={`popup ${props.isOpenHamburger && "popup_opened"}`}>
        <div className="popup__container">
          <div className="popup__wrapper">
            <NavLink to="/" className="popup__link" exact activeClassName="popup__link_active">Главная</NavLink>
            <NavLink to="/movies" className="popup__link" exact activeClassName="popup__link_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="popup__link" exact activeClassName="popup__link_active">Сохранённые фильмы</NavLink>
          </div>
          <div className="popup__wrapper popup__wrapper_aligning">
            <Link to="/profile" className="popup__link">Аккаунт</Link>
            <div className="popup__img"></div>
          </div>
          <button className="popup__button" onClick={props.onHamburgerClose}></button>
        </div>
      </div>
    </>
	);
}
