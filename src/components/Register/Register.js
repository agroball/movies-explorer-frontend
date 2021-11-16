import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Register.css';
import FormValidation from '../Validation/Validation';

function Register({handleRegister, error}) {

    const formValidation = FormValidation();
    const [formSavedProcess, setFormSavedProcess] = useState(false);
    const {email, name, password} = formValidation.data;


    function handleSubmit(e) {
        setFormSavedProcess(true)
        e.preventDefault();
        if (!email || !name || !password) {
            return;
        }
        handleRegister({ email: email, name: name, password: password });
        formValidation.resetForm();
        setTimeout(()=>{setFormSavedProcess(false)}, 3000);
    }


    return (
        <section className="register">
            <Logo/>
            <h1 className="register__greetings">Добро пожаловать!</h1>
    <Form
     id={'registration'}
     name={'signup'}
     onSubmit={handleSubmit}
     button={'Зарегистрироваться'}
     errorText={error}
     isValid={formValidation.isValid}
    >
                <p className="form__input-name">Имя</p>
                <input className={`form__input ${formValidation.inputValid.name===undefined ? '' : (!formValidation.inputValid.name ? "form__input_invalid" : '')}`}
                    id="name-input"
                    name="name"
                    type="text"
                    maxLength="30"
                    minLength="2"
                    onChange={formValidation.handleChange}
                    placeholder="Введите имя"
                    value={name || ''}
                    pattern="[A-Za-zА-Яа-яЁё0-9\s-]{2,20}"
                    required
                    disabled={formSavedProcess ? true : false}
                    />
                <span className="form__input-error">{formValidation.errors.name}</span>
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
                <input className={`form__input ${formValidation.inputValid.email===undefined ? '' : (!formValidation.inputValid.password ? "form__input_invalid" : '')}`}
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
 <p className="register__link">Уже зарегистрированы? <Link className="register__link_linked" to='/signin'>Войти</Link></p>
 </section>
    )
}

export default Register;
