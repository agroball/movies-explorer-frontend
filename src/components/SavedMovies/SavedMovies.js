import React from 'react';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';
import './SavedMovies.css';

export const SavedMovies = (props) => {

  React.useEffect(() => {

    if (!localStorage.getItem('keyValueSavedMovies')) {
      props.onHandleMovies()
    }
    props.onComponentSavedMovies(true)
    props.onIsNotFoundMovies(true)
    return () => {
      props.onComponentSavedMovies(false)
    }
  }, [])

	return (
    <>
      <SearchForm
        onGetFilms={props.onGetFilms}
        movies={props.savedMovies}
        onFindByDuration={props.onFindByDuration}
        onSetMovies={props.onSetMovies}
        keyValue="keyValueSavedMovies" />
      <div className="card-list">
        <MoviesCardList
          movies={props.savedMovies}
          component='savedMovies'
          onHandleMovieButton={props.onHandleMovieButton}
          isLoading={props.isLoading}
          onLoadedFilms={props.onLoadedFilms}
          isNotFoundMovies={props.isNotFoundMovies}
          isServerMoviesError={props.isServerMoviesError}
        />
      </div>
    </>
	);
}
