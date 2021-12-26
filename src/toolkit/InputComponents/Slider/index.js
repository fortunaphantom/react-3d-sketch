import React from 'react';
import { Slider, InputNumber } from 'antd';
import { Wrapper } from './slider.styles';

const SliderInput = ({ value, min, max, step, onChange }) => {
  const handleChangeSlider = value => {
    Array.isArray(value) ? onChange(value[0]) : onChange(value);
  };
  const validateValue = value =>
    value >= min && value <= max && (value - min) % step === 0;
  const handleChangeInput = value => {
    value && validateValue(value) && onChange(value);
  };
  return (
    <Wrapper>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChangeSlider}
      />
      <InputNumber
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChangeInput}
        style={{ width: 80 }}
      />
    </Wrapper>
  );
};

export default SliderInput;
