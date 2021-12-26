import React from 'react';
import { Select } from 'antd';

const Dropdown = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;
  return (
    <Select
      value={typeof value === 'object' ? value?.assetId : value}
      onChange={onChange}
      style={{ minWidth: '160px' }}
    >
      {options.map(({ label, value: val }, i) => (
        <Select.Option key={i} value={val}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Dropdown;
