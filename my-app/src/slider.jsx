import React, { useState } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const SimpleSlider = ({ slides, controls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider-container">
      <div className="slider">
        <div className='controls'>
          {controls.map((control, index) => (
          <button key={index} className={index === currentSlide ? 'control active' : 'control'} onClick={() => setCurrentSlide(index)}>
            {control.label}
          </button>
        ))}
        </div>
        <div className='dropdown-wrapper'>
          <Dropdown 
          controlClassName='drop-ctrl'
          options={controls}
            onChange={(e) => setCurrentSlide(e.value)} 
            value={controls[currentSlide]} 
          />
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