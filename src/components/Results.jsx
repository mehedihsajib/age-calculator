export default function Results({ day, month, year }) {
  return (
    <div className="calculated-results">
      <div className="result-item">
        <span> {year ? year : "--"}</span>
        <span> years</span>
      </div>
      <div className="result-item">
        <span>{month ? month : "--"}</span>
        <span> months</span>
      </div>
      <div className="result-item">
        <span>{day ? day : "--"}</span>
        <span> days</span>
      </div>
    </div>
  );
}
