import './Promo.css';
import NavTab from '../NavTab/NavTab';
import weblogo from '../../images/world.svg';


function Promo() {
    return (
        <section className="promo">
          <img className="promo__logo" src={weblogo} alt={weblogo}/>
          <div className="promo__block">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <NavTab />
        </section>
    );
}
export default Promo;
