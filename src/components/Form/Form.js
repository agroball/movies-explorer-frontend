import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export const Form = (props) => {

  const formRef = React.useRef()
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true)
  const buttonClassName = `form__button ${(isButtonDisabled || props.isFormDisabled) && "form__button_disable"}`

  function handleSubmit(e) {
    props.onSubmit(e);
  }

  function handleButton() {
    if (formRef.current && formRef.current.checkValidity()){
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true);
    }
  }

  React.useEffect(() => {
    handleButton()
  })

	React.useEffect(() => {
		props.onIsHidden(false)
		return () => {
			props.onIsHidden(true)
		}
	}, [])

	return (
		<div className="form" onSubmit={handleSubmit}>
			<Link to="/" className="logo"/>
			<h1 className="form__title">{props.title}</h1>
			<form ref={formRef} className="form__container">
				{props.children}
				<button  className={buttonClassName}
                 type="submit"
                 disabled={isButtonDisabled}>
          {props.typeButton}
        </button>
			</form>
			<p className="form__check">{props.check} <Link to={props.to} className="form__link" >{props.typeLink}</Link></p>
		</div>
	);
}
