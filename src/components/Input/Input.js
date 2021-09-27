import React from 'react';
import './Input.css';

export const Input = (props) => {

  const [errorMessage, setErrorMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const className = `${props.className} ${isError && props.classNameError}`;

  function handleChange(e) {
    props.onChange(e);
    if(!e.target.validity.valid) {
      setErrorMessage(e.target.validationMessage);
      setIsError(true)
    } else if (e.target.value === props.placeholder) {
      setErrorMessage('Данные должны отличаться от установленных!')
      setIsError(true)
    }
    else {
      setErrorMessage('')
      setIsError(false)
    }
  }

	return (
		<div className="input">
			<input
        onChange={handleChange}
        value={props.value}
        placeholder={props.placeholder}
        className={className}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        disabled={props.isFormDisabled}/>
			<span className="input__error">{errorMessage}</span>
		</div>
	);
}
