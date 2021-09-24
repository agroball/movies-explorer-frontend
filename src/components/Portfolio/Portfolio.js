import React from 'react';
import './Portfolio.css';
import image from '../../images/portfolio__link.svg';

export const Portfolio = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<nav className="portfolio__group">
				<ul className="portfolio__list">
					<li className="portfolio__item">
						<p className="portfolio__heading">Статичный сайт</p>
						<a className="portfolio__link" rel="noreferrer" target="_blank" href="https://agroball.github.io/how-to-learn/"><img className="portfolio__image" src={image} alt="Ссылка" /></a>
					</li>
					<li className="portfolio__item">
						<p className="portfolio__heading">Адаптивный сайт</p>
						<a className="portfolio__link" rel="noreferrer" target="_blank" href="https://agroball.github.io/russian-travel/"><img className="portfolio__image" src={image} alt="Ссылка" /></a>
					</li>
					<li className="portfolio__item">
						<p className="portfolio__heading">Одностраничное приложение</p>
						<a className="portfolio__link" rel="noreferrer" target="_blank" href="https://agroball.sharli.nomoredomains.work/"><img className="portfolio__image" src={image} alt="Ссылка" /></a>
					</li>
				</ul>
			</nav>
		</section>
	);
}