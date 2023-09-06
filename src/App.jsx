import "./App.css";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import slide from "./data.json";

function App() {
  return (
    <>
      <Carousel slides={slide.project1} />
      <Accordion slides={slide.project2} />
    </>
  );
}

export default App;
