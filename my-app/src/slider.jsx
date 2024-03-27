import React, { useState } from 'react';

const SimpleSlider = ({ slides, controls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
console.log(controls)
  return (
    <div className="slider-container">
      <div className="slider">
        <div className='controls'>
          {controls.map((control, index) => (
          <button key={index} className={index === currentSlide ? 'control active' : 'control'} onClick={() => setCurrentSlide(index)}>
            {control}
          </button>
        ))}
        </div>
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;