import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export const Register = (props) => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

	return (
		<Form
      onSubmit={handleSubmit}
			title="Добро пожаловать!"
			typeLink="Войти"
			to="/signin"
			typeButton="Зарегистрироваться"
			check="Уже зарегистрированы?"
      onIsHidden={props.onIsHidden}
      isFormDisabled={props.isFormDisabled}>
      <div className="form__wrapper">
        <Input
          onChange={handleName}
          value={name}
          className="form__input"
          classNameError="form__input_error"
          type="text"
          minLength="2"
          maxLength="30"
          isFormDisabled={props.isFormDisabled}
        />
        <label className="form__label">Имя</label>
      </div>
      <div className="form__wrapper">
        <Input
          onChange={handleEmail}
          value={email}
          className="form__input"
          classNameError="form__input_error"
          type="email"
          minLength="2"
          maxLength="30"
          isFormDisabled={props.isFormDisabled}
        />
        <label className="form__label">Email</label>
      </div>
      <div className="form__wrapper">
        <Input
          onChange={handlePassword}
          value={password}
          className="form__input"
          classNameError="form__input_error"
          type="password"
          minLength="4"
          maxLength="16"
          isFormDisabled={props.isFormDisabled}
        />
        <label className="form__label">Пароль</label>
      </div>
    </Form>
	);
}
