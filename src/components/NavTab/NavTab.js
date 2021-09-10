import React from 'react';
import './NavTab.css';

export const NavTab = () => {
	return (
		<nav className="navtab">
			<a href="#about-project" className="navtab__element">О проекте</a>
			<a href="#tech" className="navtab__element">Технологии</a>
			<a href="#about-me" className="navtab__element">Студент</a>
		</nav>
	);
}