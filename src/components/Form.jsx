import arroIcon from "../assets/icon-arrow.svg";
export default function Form() {
  return (
    <form className="calculator-form" id="calculatorForm">
      <div className="form-items">
        <div className="form-item">
          <label htmlFor="day">Day</label>
          <input id="day" type="number" placeholder="DD" />
          <span className="error-msg" data-input="day-error">
            This field is required
          </span>
        </div>
        <div className="form-item">
          <label htmlFor="month">Month</label>
          <input id="month" type="number" placeholder="MM" />
          <span className="error-msg" data-input="month-error">
            This field is required
          </span>
        </div>
        <div className="form-item">
          <label htmlFor="year">Year</label>
          <input id="year" type="number" placeholder="YYYY" />
          <span className="error-msg" data-input="year-error">
            This field is required
          </span>
        </div>
      </div>
      <div className="form-submit">
        <button type="submit">
          <img src={arroIcon} alt="Arrow down" />
        </button>
      </div>
    </form>
  );
}
