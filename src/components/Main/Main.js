import React from 'react';
import { AboutMe } from '../AboutMe/AboutMe';
import { AboutProject } from '../AboutProject/AboutProject';
import { Portfolio } from '../Portfolio/Portfolio';
import { Promo } from '../Promo/Promo';
import { Tech } from '../Tech/Tech';

export const Main = () => {

	return (
		<main >
			<Promo />
			<AboutProject />
			<Tech />
			<AboutMe />
			<Portfolio />
		</main>
	);
}
