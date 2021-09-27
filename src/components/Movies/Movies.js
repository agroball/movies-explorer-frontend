import React from 'react';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = (props) => {

  React.useEffect(()=> {
    props.onLoadedFilms(0)
    props.onIsNotFoundMovies(false)
  },[])

  return (
		<>
			<SearchForm
        onGetFilms={props.onGetFilms}
        onFindByDuration={props.onFindByDuration}
        movies={props.movies}
        onSetMovies={props.onSetMovies}
        isFormDisabled={props.isFormDisabled}
        keyValue="keyValueMovies"
      />
			<MoviesCardList
        movies={props.movies}
        onHandleMovieButton={props.onHandleMovieButton}
        savedMovies={props.savedMovies}
        component='movies'
        onSetMovies={props.onSetMovies}
        isLoading={props.isLoading}
        onLoadedFilms={props.onLoadedFilms}
        loadedFilms={props.loadedFilms}
        isNotFoundMovies={props.isNotFoundMovies}
        isServerMoviesError={props.isServerMoviesError}
      />
		</>
	);
}
