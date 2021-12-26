import React from 'react';
import { Wrapper, ColorWrapper } from './colorSelector2.styles';
import { Tooltip } from 'antd';

const Color = ({ color, label, selected, onClick }) => (
  <Tooltip placement="top" title={label}>
    <ColorWrapper selected={selected} color={color} onClick={onClick}>
      <div />
    </ColorWrapper>
  </Tooltip>
);

const ColorSelector = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;
  return (
    <Wrapper>
      {options.map(({ label, value: val, color }, i) => (
        <Color
          key={i}
          color={color}
          label={label}
          selected={val === value}
          onClick={() => {
            onChange(val);
          }}
        />
      ))}
    </Wrapper>
  );
};

export default ColorSelector;
