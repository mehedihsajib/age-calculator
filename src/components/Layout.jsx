import { useState } from "react";
import Form from "./Form";
import Results from "./Results";

export default function Layout() {
  const [inputDay, setInputDay] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [calculatedDay, setCalculatedDay] = useState("");
  const [calculatedMonth, setCalculatedMonth] = useState("");
  const [calculatedYear, setCalculatedYear] = useState("");
  const [error, setError] = useState(false);
  const [dayErrorMsg, setDayErrorMsg] = useState("");
  const [monthErrorMsg, setMonthErrorMsg] = useState("");
  const [yearErrorMsg, setYearErrorMsg] = useState("");

  function calculateAge() {
    const dayInput = parseInt(inputDay);
    const monthInput = parseInt(inputMonth) - 1;
    const yearInput = parseInt(inputYear);

    const birthDate = new Date(yearInput, monthInput, dayInput);

    const today = new Date();

    let ageInMilliseconds = today - birthDate;
    let ageInYears = Math.floor(
      ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );

    let remainingMilliseconds =
      ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
    let ageInMonths = Math.floor(
      remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
    );
    let ageInDays = Math.floor(
      (remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) /
        (24 * 60 * 60 * 1000)
    );

    setCalculatedYear(ageInYears);
    setCalculatedMonth(ageInMonths);
    setCalculatedDay(ageInDays);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!inputDay || !inputMonth || !inputYear) {
      setError(true);
      setDayErrorMsg("This field is required");
      setMonthErrorMsg("This field is required");
      setYearErrorMsg("This field is required");
    } else {
      setError(false);
      calculateAge();
    }

    setInputDay("");
    setInputMonth("");
    setInputYear("");
  }

  return (
    <div className="calculator-wrapper">
      <Form
        day={inputDay}
        setDay={setInputDay}
        month={inputMonth}
        setMonth={setInputMonth}
        year={inputYear}
        setYear={setInputYear}
        error={error}
        setError={setError}
        dayErrorMsg={dayErrorMsg}
        setDayErrorMsg={setDayErrorMsg}
        monthErrorMsg={monthErrorMsg}
        setMonthErrorMsg={setMonthErrorMsg}
        yearErrorMsg={yearErrorMsg}
        setYearErrorMsg={setYearErrorMsg}
        submitHandler={submitHandler}
      />
      <Results
        day={calculatedDay} // Display calculated values in Results component
        month={calculatedMonth}
        year={calculatedYear}
      />
    </div>
  );
}
