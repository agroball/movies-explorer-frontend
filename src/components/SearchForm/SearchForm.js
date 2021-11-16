import { useState } from "react";
import './SearchForm.css';
import findButton from '../../images/find.png';
import Checkbox from './Checkbox/Checkbox';

function SearchForm({ handleCheckbox, checkbox, onSubmit, error }) {

    const [request, setRequest] = useState({});

    function handleChange(e) {
        const { target } = e;
        const { name, value } = target;
        setRequest({...request, [name]: value });
      }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(request);
    }

    return (
        <section className="search-form">
            <form className="search-form__box"
            id='search'
            name='search'
            onSubmit={handleSubmit}
            noValidate
            >
                <fieldset className="search-form__bar">
                    <input className="search-form__input"
                    type="text"
                    name="movie"
                    placeholder="Фильм"
                    onChange={handleChange}
                    value={request.value}
                    required />
                    <button type="submit" className="search-form__submit-btn">Поиск</button>
                </fieldset>
                <span className="search-form__error">{error.text}</span>
                <Checkbox handleCheckbox={handleCheckbox} checkbox={checkbox} />
            </form>
        </section>
    );
}
export default SearchForm;
