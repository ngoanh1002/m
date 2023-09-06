import PropTypes from "prop-types";
import { useState } from "react";

const Accordion = ({ slides }) => {
  const [show, setShow] = useState(null);

  const toggle = (id) => {
    if (show === id) {
      return setShow(null);
    }
    setShow(id)
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => toggle(index)}>
              <h1>{slide.title}</h1>
            </div>
            <div className= {index === show ? 'content show' : 'content'}>
              <h4>{slide.subTitle}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  slides: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Accordion;
