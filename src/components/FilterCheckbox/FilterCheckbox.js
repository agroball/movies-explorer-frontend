import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = () => {
	return (
		<label className="checkbox">
			<input className="checkbox__input" type="checkbox" />
			<span className="checkbox__switch"></span>
		</label>
	);
}