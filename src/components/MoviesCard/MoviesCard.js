import React from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const MoviesCard = (props) => {

  const { nameRU, image, duration } = props.movie;
  const currentUser = React.useContext(CurrentUserContext);
  const id = props.movie.id || props.movie.movieId;
  const savedMovies = props.savedMovies || [];
  const trailer = props.movie.trailerLink || props.movie.trailer
  const isLiked = savedMovies.some(item => item.movieId === id && item.owner === currentUser.id);
  const movieSavedButtonClassName = (`movies-card__button ${isLiked && 'movies-card__button_like_active'}`);
  const buttonState = props.component === 'movies';
  function handleButton() {
    props.onHandleMovieButton(props.movie)
  }

  function returnLink() {
    if (typeof image === 'object') {
      return 'https://api.nomoreparties.co' + image.url
    } else {
      return image
    }
  }

  function returnDuration () {
    if(duration <= 60) {
      return duration+ 'м'
    }
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <article className="movies-card">
      <a href={trailer} target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt="Картинка к фильму" src={returnLink()} />
      </a>
      <div className="movies-card__wrapper">
        <h2 className="movies-card__title">{nameRU}</h2>
        {buttonState && <button onClick={handleButton} className={movieSavedButtonClassName}/>}
        {!buttonState && <button onClick={handleButton} className="movies-card__button movies-card__button_delete_card"/>}
      </div>
      <p className="movies-card__time">{returnDuration()}</p>
    </article>
  );
}
