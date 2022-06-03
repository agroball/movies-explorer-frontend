import { NavLink } from 'react-router-dom';
import account_icon from "../../images/account-img.svg";
import menu_icon from "../../images/menu-btn.svg";
import closeButton from '../../images/close-btn.svg';
import './Navigation.css';

function Navigation({onClose, isOpen, onMenuBtnClick, loggedIn}) {

    if (loggedIn) {
    return (
        <>
        <div className="navigation">
            <nav className="nav__menu">
                <div className="nav__menu-info">
            <NavLink to='/' activeClassName="nav__link_active" className="nav__link">Фильмы</NavLink>
            <NavLink to='/saved-movies' activeClassName="nav__link_active" className="nav__link">Сохранённые фильмы</NavLink>
            </div>
            <NavLink to='/profile' activeClassName="nav__link_active" className="nav__link nav__link_account">
            Аккаунт
            <img src={account_icon} alt="иконка" className="nav__link nav__account-icon" />
            </NavLink>
            </nav>
        </div>
        <img className="nav__menu-btn" src={menu_icon} type="button" alt="Открыть" onClick={onMenuBtnClick} />
        <div className={`nav__popup ${isOpen ? 'nav__popup_opened' : ''}`}>
            <div className="nav__popup-content">
                <button className="nav__popup-btn-close" type="button" aria-label="Закрыть" onClick={onClose}>
                    <img className="nav__popup-btn-close-image" src={closeButton} alt="Закрыть" />
                </button>
                <nav className="nav__menu">
                <div className="nav__menu-info">
            <NavLink exact to='/' activeClassName="nav__link_active" className="nav__link">Главная</NavLink>
            <NavLink to='/movies' activeClassName="nav__link_active" onClick={onClose} className="nav__link">Фильмы</NavLink>
            <NavLink to='/saved-movies' activeClassName="nav__link_active" onClick={onClose} className="nav__link">Сохранённые фильмы</NavLink>
            </div>
            <NavLink to='/profile' activeClassName="nav__link_active" onClick={onClose} className="nav__link nav__link_account">
            Аккаунт
            <img src={account_icon} alt="иконка" className="nav__link nav__account-icon" />
            </NavLink>
            </nav>
            </div>
        </div>
        </>
            )
            }
            else {
    return (
        <nav className="nav__menu_main">
            <NavLink to='/signup' className="nav__link nav__link_white">Регистрация</NavLink>
            <NavLink to='/signin' className="nav__link nav__link_signin">Войти</NavLink>
        </nav>
    )
}
}
export default Navigation;
