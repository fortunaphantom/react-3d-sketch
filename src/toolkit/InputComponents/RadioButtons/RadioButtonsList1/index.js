import React from 'react';
import { Wrapper, ButtonWrapper } from './radioButtonsList1.styles';
import { validate as isUuid } from 'uuid';

const RadioButtonsList = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;
  return (
    <Wrapper>
      {options.map(({ label, value: val }, i) => (
        <ButtonWrapper
          key={i}
          selected={isUuid(val) ? val === value?.assetId : val === value}
          onClick={() => onChange(val)}
        >
          <div>
            <div>
              <div />
            </div>
          </div>
          <div>{label}</div>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default RadioButtonsList;
