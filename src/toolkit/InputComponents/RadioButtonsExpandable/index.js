import React, { useState } from 'react';
import { Wrapper, Item, SecondaryItem } from './radioButtonsExpandable.styles';
import { DownOutlined } from '@ant-design/icons';

const RadioButtonsExpandable = ({ value, options, onChange }) => {
  const [expanded, setExpanded] = useState(new Set([]));

  const handleClickExpand = idx => {
    const updated = new Set(expanded);
    expanded.has(idx) ? updated.delete(idx) : updated.add(idx);
    setExpanded(updated);
  };

  return (
    <Wrapper>
      {options.map(({ img, label, data, value: val }, i) => (
        <Item
          img={img}
          key={i}
          selected={value === val}
          expanded={expanded.has(i)}
        >
          <div onClick={() => onChange(val)}>
            <div>
              <div>{img && <img src={img} alt={label} />}</div>
            </div>
            <div>
              <div>{label}</div>
            </div>
            <div>
              <div
                onClick={e => {
                  e.stopPropagation();
                  handleClickExpand(i);
                }}
              >
                <DownOutlined />
              </div>
            </div>
          </div>
          <div>
            <div>
              {Object.entries(data).map(([key, info], j) => (
                <SecondaryItem key={j}>
                  <div>{key}</div>
                  <div>{info}</div>
                </SecondaryItem>
              ))}
            </div>
          </div>
        </Item>
      ))}
    </Wrapper>
  );
};

export default RadioButtonsExpandable;
