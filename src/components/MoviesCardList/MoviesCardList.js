import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Preloader } from '../Preloader/Preloader';
import './MoviesCardList.css';
import {
  MAX_SIZE, MIDDLE_SIZE_START, MOVIES_COUNT_MAX, MOVIES_COUNT_MIDDLE,
  MOVIES_COUNT_LOW, MOVIES_COUNT_MAX_STEP, MOVIES_COUNT_MIDDLE_STEP
} from "../../utils/constans";

export const MoviesCardList = (props) => {

  const [count, setCount] = React.useState(0);
  const buttonClassName = `card-list__button ${count >= props.movies.length && "card-list__button_hidden"}`
  const isNotFound = props.isNotFoundMovies && props.movies.length === 0;
  const isServerMoviesError = props.isServerMoviesError && props.movies.length === 0;

  function handleMoviesCount(width) {
    if (props.component === 'savedMovies') {
      return { count: props.movies.length }
    }
    if (width >= MAX_SIZE) {
      return { count: props.loadedFilms || MOVIES_COUNT_MAX, countStep: MOVIES_COUNT_MAX_STEP }
    } else if (width >= MIDDLE_SIZE_START && width < MAX_SIZE) {
      return { count: props.loadedFilms || MOVIES_COUNT_MIDDLE, countStep: MOVIES_COUNT_MIDDLE_STEP }
    } else {
      return { count: props.loadedFilms || MOVIES_COUNT_LOW, countStep: MOVIES_COUNT_MIDDLE_STEP }
    }
  }

  function handleSetCount({ count }) {
    setCount(count)
    if (props.component !== 'savedMovies') props.onLoadedFilms(count)
  }

  function getWidth() {
    const width = window.innerWidth
    handleSetCount(handleMoviesCount(width))
  }

  function handleUpdateWidth() {
    setTimeout(getWidth, 1000)
  }

  function handleButton() {
    const width = window.innerWidth
    const { countStep } = handleMoviesCount(width)
    setCount((state) => state + countStep)
    props.onLoadedFilms((state) => state + countStep)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleUpdateWidth)
    return () => {
      window.removeEventListener("resize", handleUpdateWidth)
    }
  })

  React.useEffect(() => {
    const width = window.innerWidth;
    handleSetCount(handleMoviesCount(width))
  }, [props.movies])


  return (
    <section className="card-list">
      {props.isLoading && <Preloader />}
      {isNotFound && <p className="card-list__error-message">Ничего не найдено.</p>}
      {isServerMoviesError && <p className="card-list__error-message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>}
      <div className="card-list__wrapper">
        {props.movies.slice(0, count).map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            onHandleMovieButton={props.onHandleMovieButton}
            savedMovies={props.savedMovies}
            component={props.component} />
        ))}
      </div>
      <button className={buttonClassName} onClick={handleButton}>Еще</button>
    </section>
	);
}
