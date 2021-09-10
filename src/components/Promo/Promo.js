import React from 'react';
import { NavTab } from '../NavTab/NavTab';
import './Promo.css';

export const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <NavTab />
    </section>
  );
}