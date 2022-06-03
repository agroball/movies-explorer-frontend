import { React, useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLiked, movies, onSave, onDelete, onSubmit, preloader, error, emptyResult }) {

  const [checkbox, setCheckbox] = useState(false);
  const [resultMovies, setResultMovies] = useState([]);

  useEffect(() => {
    checkbox ? setResultMovies(movies.filter(movie => movie.duration <= 40)) : setResultMovies(movies)
  }, [checkbox, movies]);

  function handleCheckbox() {
    setCheckbox(!checkbox);
  }

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
        handleCheckbox={handleCheckbox}
        checkbox={checkbox}
        onSubmit={onSubmit}
        error={error}
         />
        <MoviesCardList
        movies={resultMovies}
        onSave={onSave}
        onDelete={onDelete}
        emptyResult={emptyResult}
        preloader={preloader}
        isLiked={isLiked}
        />
      </div>
    </section>
  )
}
export default Movies