import React from 'react';
import { Heading } from '../Heading/Heading';
import './AboutMe.css';
import image from '../../images/image.jpg'

export const AboutMe = () => {
	return (
		<section className="about-me">
			<Heading
				name="Студент"
				id="about-me" />
			<div className="about-me__wrapper">
				<h2 className="about-me__title">Роман</h2>
				<p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
				<p className="about-me__text">Я родился и живу в Москве, закончил факультет ПГС в МГСУ. У меня есть жена. В свободное время занимаюсь спортом. Есть кмс по жиму лежа.</p>
				<div className="about-me__links">
					<a className="about-me__link" target="_blank" href="https://www.codewars.com/users/agroball">Codewars</a>
					<a className="about-me__link" target="_blank" href="https://github.com/agroball">Github</a>
				</div>
				<img className="about-me__photo" src={image} alt="Моя фотография" />
			</div>
		</section>
	);
}
