import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="not-found__content">
            <h1 className="not-found__404">404</h1>
            <p className="not-found__note">Страница не найдена</p>
            <Link to="/" className="not-found__back">Назад</Link>
        </section>
    )
}

export default PageNotFound;