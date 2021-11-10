import React from 'react';
import { Input } from '../Input/Input';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export const Profile = (props) => {

  const formRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const buttonClassName = `profile__button ${(isButtonDisabled || props.isFormDisabled) && "profile__button_disabled"}`

  function handleName(e) {
  setName(e.target.value);
  }
  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      email: email,
    });
  }

  React.useEffect(() => {
    if(formRef.current && formRef.current.checkValidity()
      && name !== currentUser.name && email !== currentUser.email) {
      setIsButtonDisabled(false);
    }else{
      setIsButtonDisabled(true);
    }
  })

	React.useEffect(() => {
		props.onIsHiddenFooter(false)
		return () => {
			props.onIsHiddenFooter(true)
		}
	}, [])

	return (
		<div className="profile">
			<h1 className="profile__title">Привет, {props.currentUser.name}!</h1>
			<form ref={formRef} className="profile__form" onSubmit={handleSubmit}>
				<div className="profile__wrapper">
					<Input
						className="profile__input"
            classNameError="profile__input_error"
						type="text"
						minLength="2"
						maxLength="30"
            placeholder={props.currentUser.name}
            value={props.currentUser.name}
            onChange={handleName}
            isFormDisabled={props.isFormDisabled}
          />
					<label className="profile__label">Имя</label>
				</div>
				<div className="profile__wrapper">
					<Input
            className="profile__input profile__input_email"
            classNameError="profile__input_error"
						type="email"
						minLength="2"
						maxLength="30"
            placeholder={props.currentUser.email}
            value={props.currentUser.email}
            onChange={handleEmail}
            isFormDisabled={props.isFormDisabled}
          />
					<label className="profile__label">E-mail</label>
				</div>
				<button
          className={buttonClassName}
          type="submit"
          disabled={isButtonDisabled}>Редактировать</button>
			</form>
			<button className="profile__link" onClick={props.onSignOut}>Выйти из аккаунта</button>
		</div>
	);
}
