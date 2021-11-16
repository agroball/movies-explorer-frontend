import './Form.css'
import { useLocation } from 'react-router-dom';

function Form(props) {
    return (
        <form 
        className="form"
        id={`${props.id}-form`}
        name={`${props.name}-form`}
        onSubmit={props.onSubmit}>
            {props.children}
            <div className="form__button">
            { useLocation() === '/profile' && <span className="form__success-message">{props.successText.text}</span>}
            <span className="form__error">{props.errorText.text}</span>
            <button className={`form__btn-save ${!props.isValid ? "form__btn-save_inactive" : ''}`}
                type="submit"
                value="Сохранить"
                aria-label="Сохранить"
                name="button"
                disabled={!props.isValid || ''}
            >{props.button}</button>
            </div>
        </form>
    )
}

export default Form;