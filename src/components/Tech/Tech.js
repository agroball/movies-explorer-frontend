import React from 'react';
import { Heading } from '../Heading/Heading';
import './Tech.css';

export const Tech = () => {
  return (
    <section className="tech">
      <Heading
        name="Технологии"
        id="tech" />
      <h2 className="tech__title">7 технологий</h2>
      <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tech__list">
        <li className="tech__cell">HTML</li>
        <li className="tech__cell">CSS</li>
        <li className="tech__cell">JS</li>
        <li className="tech__cell">React</li>
        <li className="tech__cell">Git</li>
        <li className="tech__cell">Express.js</li>
        <li className="tech__cell">mongoDB</li>
      </ul>
    </section>
  );
}