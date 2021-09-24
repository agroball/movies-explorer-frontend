import React from 'react';
import './Error404.css';
import { useHistory } from 'react-router-dom';

export const Error404 = (props) => {

	const history = useHistory();

	React.useEffect(() => {
		props.onIsHidden(false)
		return () => {
			props.onIsHidden(true)
		}
	}, [])

	return (
		<div className="error">
			<h1 className="error__title">404</h1>
			<p className="error__subtitle">Страница не найдена</p>
			<button className="error__button" onClick={() => history.goBack()}>Назад</button>
		</div>
	);
}