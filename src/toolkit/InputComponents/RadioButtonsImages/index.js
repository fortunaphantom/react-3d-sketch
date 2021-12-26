import React from 'react';
import {
  Wrapper,
  ButtonsRow,
  ButtonWrapper,
} from './radioButtonsImages.styles';
import icnImgMissing from '../assets/no-image.webp';

const RadioButtonsImages = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;

  return (
    <Wrapper>
      <ButtonsRow>
        {options.map(({ label, img, value: val }, i) => (
          <ButtonWrapper
            key={i}
            selected={val === value}
            onClick={() => onChange(val)}
          >
            <div>
              <img src={img || icnImgMissing} alt={label} />
            </div>
            <div>{label}</div>
          </ButtonWrapper>
        ))}
      </ButtonsRow>
    </Wrapper>
  );
};

export default RadioButtonsImages;
