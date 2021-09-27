import React from 'react';
import './InfoToolTip.css';

function InfoToolTip(props) {

  return(
    <div className={`modal-window ${props.isOpen && 'modal-window_opened'}`}>
      <form className="modal-window__container ">
        <button className="modal-window__close" onClick={props.onClose} type="button"></button>
        <h2 className="modal-window__title">{props.title}</h2>
      </form>
    </div>
  )
}

export default InfoToolTip;
