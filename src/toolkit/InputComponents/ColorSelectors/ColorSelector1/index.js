import React from 'react';
import { Wrapper, ColorWrapper } from './colorSelector1.styles';
import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const Color = ({ color, label, selected, onClick }) => (
  <Tooltip placement="top" title={label}>
    <ColorWrapper color={color} onClick={onClick}>
      {selected && (
        <div>
          <CheckOutlined />
        </div>
      )}
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
