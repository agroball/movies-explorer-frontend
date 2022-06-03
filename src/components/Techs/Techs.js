import './Techs.css';


function Techs() {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__content">
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__count">HTML</li>
                <li className="techs__count">CSS</li>
                <li className="techs__count">JS</li>
                <li className="techs__count">React</li>
                <li className="techs__count">Git</li>
                <li className="techs__count">Express.js</li>
                <li className="techs__count">mongoDB</li>
            </ul>
            </div>
        </section>
    );
}
export default Techs;
