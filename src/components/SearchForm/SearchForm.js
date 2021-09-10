import React from 'react';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export const SearchForm = () => {
	return (
		<section className="search-form">
			<form className="search-form__form">
				<div className="search-form__container">
					<input className="search-form__input" type="search" placeholder="Фильм" required></input>
					<button className="search-form__button"></button>
				</div>
				<div className="search-form__wrapper">
					<label className="search-form__title">Короткометражки</label>
					<FilterCheckbox />
				</div>
			</form>
		</section>
	);
}