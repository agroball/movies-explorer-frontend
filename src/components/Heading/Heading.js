import React from 'react';
import './Heading.css';

export const Heading = (props) => {
  return (
    <h2 className="heading" id={props.id}>{props.name}</h2>
  );
}