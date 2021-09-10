import React from 'react';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = () => {
	return (
		<>
			<SearchForm />
			<MoviesCardList />
		</>
	);
}