import React from 'react';
import { validate as isUuid } from 'uuid';
import { Wrapper, ButtonWrapper } from './radioButtons1.styles';

const RadioButtons1 = ({ options, value, onChange, disabled }) => {
  if (!options || options.length === 0) return null;

  return (
    <Wrapper>
      {options.map(({ label, value: val }, i) => (
        <ButtonWrapper
          key={i}
          onClick={() => onChange(val)}
          selected={isUuid(val) ? val === value?.assetId : val === value}
          disabled={!!disabled}
        >
          {label}
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default RadioButtons1;
