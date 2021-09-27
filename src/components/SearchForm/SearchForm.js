import React from 'react';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export const SearchForm = (props) => {

  const [keyValue, setKeyValue] = React.useState('');

  function handleKeyValue(e) {
    setKeyValue(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault()
    props.onGetFilms(keyValue)
  }

  React.useEffect(() => {
    if (localStorage.getItem(props.keyValue)) {
      setKeyValue(localStorage.getItem(props.keyValue))
    }
  }, [])

	return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSearch}>
        <div className="search-form__container">
          <input onChange={handleKeyValue} value={keyValue} className="search-form__input" type="search" placeholder="Фильм" disabled={props.isFormDisabled} required></input>
          <button className={`search-form__button ${props.isFormDisabled && "search-form__button_disabled"}`} disabled={props.isFormDisabled} type="submit"></button>
        </div>
        <div className="search-form__wrapper">
          <label className="search-form__title">Короткометражки</label>
          <FilterCheckbox
            onFindByDuration={props.onFindByDuration}
            movies={props.movies}
            onSetMovies={props.onSetMovies}
            keyValue={keyValue}
            onGetFilms={props.onGetFilms} />
        </div>
      </form>
    </section>
	);
}
