import React from 'react';
import { Heading } from '../Heading/Heading';
import './AboutMe.css';
import image from '../../images/about-me__photo.png'

export const AboutMe = () => {
	return (
		<section className="about-me">
			<Heading
				name="Студент"
				id="about-me" />
			<div className="about-me__wrapper">
				<h2 className="about-me__title">Виталий</h2>
				<p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
				<p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.</p>
				<div className="about-me__links">
					<a className="about-me__link" target="_blank" href="https://www.codewars.com/users/agroball">Codewars</a>
					<a className="about-me__link" target="_blank" href="https://github.com/agroball">Github</a>
				</div>
				<img className="about-me__photo" src={image} alt="Моя фотография" />
			</div>
		</section>
	);
}