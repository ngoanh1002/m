import PropTypes from "prop-types";
import Button from "./Button";

const Slide = ({ slides, currentIndex, onPrev, onNext }) => {
  return (
    <>
      <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
      <h2>{slides.title}</h2>
      <h2>{slides.subtitle}</h2>
      <Button onClick={onPrev} text="Prev" />
      <Button onClick={onNext} text="Next" />
    </>
  );
};

Slide.propTypes = {
  currentIndex: PropTypes.string,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slide;
