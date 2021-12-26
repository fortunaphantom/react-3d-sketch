import React from 'react';
import { Radio } from 'antd';
import { validate as isUuid } from 'uuid';

const RadioButtonsList2 = ({ options, value, onChange }) => {
  return (
    <Radio.Group
      value={isUuid(value) ? value.assetId : value}
      buttonStyle="solid"
      onChange={e => onChange(e.target.value)}
    >
      {options.map(({ label, value: val }, i) => (
        <Radio.Button key={i} value={val}>
          {label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default RadioButtonsList2;
