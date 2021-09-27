import React from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = (props) => {

  const [isChecked, setIsChecked] = React.useState(false);
  function handleCheck() {
    if(isChecked){
      setIsChecked(false)
      props.onGetFilms(props.keyValue)
    } else{
      setIsChecked(true)
      props.onFindByDuration(props.onSetMovies, props.movies)
    }
  }

	return (
		<label className="checkbox">
			<input onChange={handleCheck} checked={isChecked} className="checkbox__input" type="checkbox" />
			<span className="checkbox__switch"></span>
		</label>
	);
}
