import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(100);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <b>Character Width</b>
      <input 
        type="range" 
        min="20" 
        max="500" 
        value={value} 
        onChange={handleSliderChange} 
      />
      <b>{value}</b>
    </div>
  );
};

export default Slider;
