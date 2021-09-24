import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export const Form = (props) => {

	React.useEffect(() => {
		props.onIsHidden(false)
		return () => {
			props.onIsHidden(true)
		}
	}, [])

	return (
		<div className="form">
			<Link to="/" className="logo"></Link>
			<h1 className="form__title">{props.title}</h1>
			<form className="form__container">
				{props.children}
				<button className="form__button">{props.typeButton}</button>
			</form>
			<p className="form__check">{props.check} <Link to={props.to} className="form__link" >{props.typeLink}</Link></p>
		</div>
	);
}