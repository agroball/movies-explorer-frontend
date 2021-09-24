import React from 'react';
import { Heading } from '../Heading/Heading';
import './AboutProject.css';

export const AboutProject = () => {
	return (
		<section className="about-project">
			<Heading
				name="О проекте"
				id="about-project" />
			<div className="about-project__wrapper">
				<h2 className="about-project__title">Дипломный проект включал 5 этапов</h2>
				<h2 className="about-project__title">На выполнение диплома ушло 5 недель</h2>
				<p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				<p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
			</div>
			<div className="deadlines">
				<div className="deadlines__time deadlines__time_other_theme">1 неделя</div>
				<div className="deadlines__time">4 недели</div>
				<p className="deadlines__topic">Back-end</p>
				<p className="deadlines__topic">Front-end</p>
			</div>
		</section>
	);
}