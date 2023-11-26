import { useState } from "react";
import arroIcon from "../assets/icon-arrow.svg";
export default function Form() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const [dayErrorMsg, setDayErrorMsg] = useState("");
  const [monthErrorMsg, setMonthErrorMsg] = useState("");
  const [yearErrorMsg, setYearErrorMsg] = useState("");

  function dayChangeHandler(e) {
    const newDay = e.target.value;
    setDay(newDay);

    const numDay = parseInt(newDay, 10);

    if (numDay < 1 || numDay > 31) {
      setError(true);
      setDayErrorMsg("Must be a valid day");
    } else {
      setDayErrorMsg("");
    }
  }

  function monthChangeHandler(e) {
    const newMonth = e.target.value;
    setMonth(newMonth);

    const numMonth = parseInt(newMonth, 10);

    if (numMonth < 1 || numMonth > 12) {
      setError(true);
      setMonthErrorMsg("Must be a valid month");
    } else {
      setMonthErrorMsg("");
    }
  }

  function yearChangeHandler(e) {
    const newYear = e.target.value;
    setYear(newYear);

    const numYear = parseInt(newYear, 10);
    const currentYear = new Date().getFullYear();

    if (numYear > currentYear) {
      setError(true);
      setYearErrorMsg("Year can't be future");
    } else {
      setYearErrorMsg("");
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!day || !month || !year) {
      setError(true);
      setDayErrorMsg("This field is required");
      setMonthErrorMsg("This field is required");
      setYearErrorMsg("This field is required");
    } else {
      setError(false);
    }
    console.log(day, month, year);
    setDay("");
    setMonth("");
    setYear("");
  }

  // if (day === "" || month === "" || year === "") {
  //   setError(true);
  //   setDayErrorMsg("This field is required");
  //   setMonthErrorMsg("This field is required");
  //   setYearErrorMsg("This field is required");
  // }

  // if(day.trim() === "") {

  // } else if (day.trim < 1 || day.trim > 31) {
  //   setError(true);
  // }

  return (
    <form className="calculator-form" onSubmit={submitHandler}>
      <div className="form-items">
        <div
          className={`form-item ${
            error && dayErrorMsg !== "" ? "has-error" : ""
          }`}
        >
          <label htmlFor="day">Day</label>
          <input
            type="number"
            placeholder="DD"
            value={day}
            onChange={dayChangeHandler}
          />
          {error && <span className="error-msg">{dayErrorMsg}</span>}
        </div>
        <div
          className={`form-item ${
            error && monthErrorMsg !== "" ? "has-error" : ""
          }`}
        >
          <label htmlFor="month">Month</label>
          <input
            type="number"
            placeholder="MM"
            value={month}
            onChange={monthChangeHandler}
          />
          {error && <span className="error-msg">{monthErrorMsg}</span>}
        </div>
        <div
          className={`form-item ${
            error && yearErrorMsg !== "" ? "has-error" : ""
          }`}
        >
          <label htmlFor="year">Year</label>
          <input
            type="number"
            placeholder="YYYY"
            value={year}
            onChange={yearChangeHandler}
          />
          {error && <span className="error-msg">{yearErrorMsg}</span>}
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
