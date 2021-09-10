import React from 'react';
import './Hamburger.css';

export const Hamburger = (props) => {
	return (
		<button className={props.class} onClick={props.onHamburgerOpen}></button>
	);
}