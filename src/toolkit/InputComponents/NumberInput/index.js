import React from 'react';
import { Wrapper } from './numberInput.styles';
import { InputNumber } from 'antd';

const NumberInput = ({
  label,
  value,
  price,
  showTotal,
  min,
  max,
  onChange,
}) => {
  return (
    <Wrapper>
      <div>{label}</div>
      <div>{price && `$${price}${showTotal ? ` x ` : ''}`}</div>
      <div>
        <InputNumber
          style={{ width: '60px' }}
          min={min}
          max={max}
          defaultValue={0}
          value={value}
          onChange={onChange}
        />
      </div>
      {price && showTotal && <div>${price * value}</div>}
    </Wrapper>
  );
};

export default NumberInput;
