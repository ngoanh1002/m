import "./App.css";
import Accordion from "./components/Accordion";
import slide from "./data.json";

function App() {
  return (
    <>
      <Accordion slides={slide.project} />
    </>
  );
}

export default App;
