import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__content">
            <div className="about__info">
                <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__info">
                <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            </div>
            <div className="about__timeline">
                    <span className="about__weeks">1 неделя</span>
                    <span className="about__weeks">4 недели</span>
                    <span className="about__notes">Back-end</span>
                    <span className="about__notes">Front-end</span>
            </div>
        </section>
    );
}
export default AboutProject;
