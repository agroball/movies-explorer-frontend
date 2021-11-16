import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({ card, onSave, onDelete, isLiked }) {

    function TimeMath(count){
        const hours = Math.floor(count / 60);
        const minutes = Math.floor(count - (hours * 60));
        return `${hours > 0 ? (hours + ' ч : ' + minutes + ' мин') : (minutes + ' мин')}`;
    }

    let pathname = useLocation().pathname;


    function handleSaveClick(evt) {
        evt.preventDefault();
        onSave(card);
      }

      function handleDeleteClick(evt) {
        evt.preventDefault();
        onDelete(card)
      }

    return (
        <li className="movie-card">
            <div className="movie-card__content">
            <div className="movie-card__info">
                <h2 className="card__title">{card.nameRU}</h2>
              <button
                className={pathname === "/movies" ? `movie-card__btn-like ${isLiked(card) ? "movie-card__btn-like_active" : ""}` : "movie-card__btn-delete"}
                type="button"
                onClick={pathname === "/movies" && !isLiked(card) ? handleSaveClick : handleDeleteClick}
              >
              </button>
            </div>
              <p className="movie-card__duration">{TimeMath(card.duration)}</p>
                    </div>
            <a href={card.trailer} target="_blank" rel="noreferrer"><img className="movie-card__image" src={card.image} alt={card.nameRU} /></a>
        </li>
    )
}

export default MoviesCard;
