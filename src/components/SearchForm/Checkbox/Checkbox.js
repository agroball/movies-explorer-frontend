import './Checkbox.css';

function Checkbox({ handleCheckbox, checkbox }) {

    return (
        <fieldset className="checkbox">
        <label className="checkbox-btn" htmlFor="checkbox">
        <input
           onClick={handleCheckbox}
           type="checkbox"
           className="checkbox-toggle"
           name="checkbox"
           id="checkbox"
           defaultChecked={checkbox}
        />
        <span className="pseudo-item"><span className="pseudo-item-knob"></span></span>
        </label>
        <p className="checkbox-text">Короткометражки</p>
         </fieldset>
    )
}

export default Checkbox;