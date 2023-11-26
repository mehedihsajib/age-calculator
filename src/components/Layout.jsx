import Form from "./Form";
import Results from "./Results";

export default function Layout() {
  return (
    <div className="calculator-wrapper">
      <Form />
      <Results />
    </div>
  );
}
