import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export const Login = (props) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({ email: email, password: password });

  }

	return (
		<Form
      onSubmit={handleSubmit}
			title="Рады видеть!"
			typeLink="Регистрация"
			to="/signup"
			typeButton="Войти"
			check="Еще не зарегистрированы?"
			onIsHidden={props.onIsHidden}
      isFormDisabled={props.isFormDisabled}>
			<div className="form__wrapper">
				<Input
          onChange={handleEmail}
          value={email}
					className="form__input"
          classNameError="form__input_error"
					type="email"
					minLength="2"
					maxLength="30"
          isFormDisabled={props.isFormDisabled}/>
				<label className="form__label">Email</label>
			</div>
			<div className="form__wrapper form__wrapper_for_login">
				<Input
          onChange={handlePassword}
          value={password}
					className="form__input"
          classNameError="form__input_error"
					type="password"
					minLength="4"
					maxLength="16"
          isFormDisabled={props.isFormDisabled}/>
				<label className="form__label">Пароль</label>
			</div>
		</Form>
	);
}
