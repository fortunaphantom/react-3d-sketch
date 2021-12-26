import React from 'react';
import { Wrapper, Primary, Secondary } from './priceQuantityInput.styles';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const PriceQuantityInput = ({
  label,
  value,
  price,
  min,
  max,
  step,
  defaultValue,
  disabled,
  onChange,
  children,
}) => {
  const handleChange = delta => {
    let updated = value + delta;
    if (updated >= max) updated = max;
    if (updated <= min) updated = min;
    onChange(updated);
  };

  return (
    <Wrapper expand={!!children && value > 0}>
      <Primary value={value} disabled={!!disabled}>
        <div>
          <div>
            <div onClick={() => handleChange(-(step || 1))}>
              <MinusOutlined />
            </div>
          </div>
          <div>
            <div>{value || defaultValue || 0}</div>
          </div>
          <div>
            <div onClick={() => handleChange(step || 1)}>
              <PlusOutlined />
            </div>
          </div>
        </div>
        <div>{label}</div>
        {price && (
          <div>
            <div>{value >= 1 ? `+$${price * value}` : `$${price} ea`}</div>
            {value >= 2 ? <div>${price} ea</div> : null}
          </div>
        )}
      </Primary>
      <Secondary>{children}</Secondary>
    </Wrapper>
  );
};

export default PriceQuantityInput;
