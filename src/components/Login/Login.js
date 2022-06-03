import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import "./Login.css";
import FormValidation from '../Validation/Validation';

function Login({handleLogin, error}) {

    const formValidation = FormValidation();
    const [formSavedProcess, setFormSavedProcess] = useState(false);
    const {email, password} = formValidation.data;



    function handleSubmit(e) {
        setFormSavedProcess(true)
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        handleLogin({ email: email, password: password });
        formValidation.resetForm();
        setTimeout(()=>{setFormSavedProcess(false)}, 3000);
    }


    return (
        <section className="login">
            <Logo/>
                <h1 className="login__greetings">Рады видеть!</h1>
                    <Form
                    id={'login'}
                    name={'signin'}
                    onSubmit={handleSubmit}
                    button={'Войти'}
                    errorText={error}
                    isValid={formValidation.isValid}
                    >
                        <p className="form__input-name">E-mail</p>
                        <input className={`form__input ${formValidation.inputValid.email===undefined ? '' : (!formValidation.inputValid.email ? "form__input_invalid" : '')}`}
                        id="email-input"
                        type="email"
                        name="email"
                        maxLength="60"
                        minLength="5"
                        onChange={formValidation.handleChange}
                        placeholder="Введите почту"
                        value={email || ''}
                        pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
                        required
                        disabled={formSavedProcess ? true : false}
                         />
                    <span className="form__input-error">{formValidation.errors.email}</span>
                    <p className="form__input-name">Пароль</p>
                    <input className={`form__input ${formValidation.inputValid.password===undefined ? '' : (!formValidation.inputValid.password ? "form__input_invalid" : '')}`}
                            id="password-input"
                            type="password"
                            name="password"
                            maxLength="20"
                            minLength="5"
                            placeholder="Введите пароль"
                            onChange={formValidation.handleChange}
                            autoComplete="off"
                            value={password || ''}
                            required
                            disabled={formSavedProcess ? true : false}
                         />
                    <span className="form__input-error">{formValidation.errors.password}</span>
                    </Form>
                <p className="login__link">Ещё не зарегистрированы? <Link className="login__link_linked" to='/signup'>Регистрация</Link></p>
        </section>
    )
}

export default Login;
