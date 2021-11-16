import './More.css';

function More({handleMoreBtn}) {

    return (
        <div className="more">
        <button onClick={handleMoreBtn} className="more__btn">Ещё</button>
        </div>
    )
}

export default More;