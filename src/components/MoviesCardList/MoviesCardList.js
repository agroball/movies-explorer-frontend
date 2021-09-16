import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import img1 from "../../images/card1.png";
import img2 from "../../images/card2.png";
import img3 from "../../images/card3.png";
import img4 from "../../images/card4.png";
import img5 from "../../images/card5.png";
import img6 from "../../images/card6.png";
import img7 from "../../images/card7.png";
import img8 from "../../images/card8.png";
import img9 from "../../images/card9.png";
import img10 from "../../images/card10.png";
import img11 from "../../images/card11.png";
import img12 from "../../images/card12.png";
import img13 from "../../images/card13.png";
import img14 from "../../images/card14.png";
import img15 from "../../images/card15.png";
import img16 from "../../images/card16.png";

export const MoviesCardList = () => {
	return (
		<section className="card-list">
			<div className="card-list__wrapper">
				<MoviesCard
					img={img1}
					title="33 слова о дизайне"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img2}
					title="Киноальманах «100 лет дизайна»"
					time="1ч 42м" />
				<MoviesCard
					img={img3}
					title="В погоне за Бенкси"
					time="1ч 42м" />
				<MoviesCard
					img={img4}
					title="Баския: Взрыв реальности"
					time="1ч 42м" />
				<MoviesCard
					img={img5}
					title="Бег это свобода"
					time="1ч 42м" />
				<MoviesCard
					img={img6}
					title="Книготорговцы"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img7}
					title="Когда я думаю о Германии ночью"
					time="1ч 42м" />
				<MoviesCard
					img={img8}
					title="Gimme Danger: История Игги и The Stooge"
					time="1ч 42м" />
				<MoviesCard
					img={img9}
					title="Дженис: Маленькая девочка грустит"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img10}
					title="Соберись перед прыжком"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img11}
					title="Пи Джей Харви: A dog called money"
					time="1ч 42м" />
				<MoviesCard
					img={img12}
					title="По волнам: Искусство звука в кино"
					time="1ч 42м" />
        <MoviesCard
          img={img13}
          title="Рудбой"
          time="1ч 42м" />
        <MoviesCard
          img={img14}
          title="Скейт - кухня"
          time="1ч 42м" />
        <MoviesCard
          img={img15}
          title="Война искусств"
          time="1ч 42м" />
        <MoviesCard
          img={img16}
          title="Зона"
          time="1ч 42м" />
			</div>
			<button className="card-list__button">Еще</button>
		</section>
	);
}
