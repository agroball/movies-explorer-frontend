import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from './More/More';
import NotFound from './MoviesNotFound/MoviesNotFound';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, onSave, isLiked, onDelete, emptyResult, preloader }) {

    const [countCards, setCountCards] = useState(defineCountCard('start'));//Сколько карточек
    const [isBtnActive, setIsBtnActive] = useState(false);//Кнопка еще


    useEffect(() => {
        window.addEventListener("resize", defineCountCard);
        }, []);//Размер экрана

    useEffect(() => {
        countCards < movies.length ? setIsBtnActive(true) : setIsBtnActive(false);
        }, [countCards, movies]);//Показать убрать кнопку

    function defineCountCard(string) {
        let cardsArr = 0;
        let addCards = 0;

        if (document.documentElement.scrollWidth > 520) {
        cardsArr = 7;
        addCards = 7;
        }
        else {
        cardsArr = 5;
        addCards = 2;
        }
        if (string === 'start') {
        return cardsArr
        } else {
        return addCards
        }
    }
  //Определяем сколько показать карточек сначале и плюсом
    function handleMoreButton() {
        setCountCards(countCards + defineCountCard('more'));
    }//Клик по кнопке

return (
<section className="cards">
<ul className="cards__gallery">
    {movies.slice(0, countCards).map((cardObj) => (
       <MoviesCard
            key={cardObj.id}
            card={cardObj}
            onSave={onSave}
            onDelete={onDelete}
            isLiked={isLiked}
        />
        ))}
</ul>
    {preloader && (<Preloader />)}
    {emptyResult && <NotFound />}
    {useLocation().pathname==='/movies' && (isBtnActive ? <More handleMoreBtn={handleMoreButton} /> : '')}
</section>
)
}

export default MoviesCardList;
