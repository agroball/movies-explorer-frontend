import React from 'react';
import './MoviesCard.css';

export const MoviesCard = (props) => {

	return (
		<article className="movies-card">
			<img className="movies-card__image" alt="Картинка к фильму" src={props.img} />
			<div className="movies-card__wrapper">
				<h2 className="movies-card__title">{props.title}</h2>
				{!props.isSavedMovies && <button className={`movies-card__button ${props.isLiked && 'movies-card__button_like_active'}`}></button>}
				{props.isSavedMovies && <button className="movies-card__button movies-card__button_delete_card"></button>}
			</div>
			<p className="movies-card__time">{props.time}</p>
		</article>
	);
}