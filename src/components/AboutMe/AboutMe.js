import image from "../../images/my-photo.jpg";
import './AboutMe.css';

function AboutMe() {
    return (
      <section className="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__wrapper">
          <h3 className="about-me__name">Роман</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__text">Я родился и живу в Москве, закончил факультет ПГС в МГСУ. У меня есть жена. В свободное время занимаюсь спортом. Есть кмс по жиму лежа.</p>
          <div className="about-me__links">
            <a className="about-me__link" target="_blank" href="https://www.codewars.com/users/agroball" rel="noreferrer">Codewars</a>
            <a className="about-me__link" target="_blank" href="https://github.com/agroball" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__photo" src={image} alt="Моя фотография" />
        </div>
      </section>
    );
}
export default AboutMe;
