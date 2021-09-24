import React from 'react';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import './Profile.css';

export const Profile = (props) => {

	React.useEffect(() => {
		props.onIsHiddenFooter(false)
		return () => {
			props.onIsHiddenFooter(true)
		}
	}, [])

	return (
		<div className="profile">
			<h1 className="profile__title">Привет, Виталий!</h1>
			<form className="profile__form">
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="text"
						minLength="2"
						maxLength="30" />
					<label className="profile__label">Имя</label>
				</div>
				<div className="profile__wrapper">
					<Input
						className="profile__input"
						type="email"
						minLength="2"
						maxLength="30" />
					<label className="profile__label">E-mail</label>
				</div>
				<button className="profile__button">Редактировать</button>
			</form>
			<Link to="/signin"className="profile__link">Выйти из аккаунта</Link>
		</div>
	);
}
