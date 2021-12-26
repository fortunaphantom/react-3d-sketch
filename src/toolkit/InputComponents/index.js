import React from 'react';

import {
  Wrapper,
  Label,
  Description,
  InputWrapper,
} from './inputComponents.styles';

import { ColorSelector1, ColorSelector2 } from './ColorSelectors';
import {
  RadioButtons1,
  RadioButtonsList1,
  RadioButtonsList2,
} from './RadioButtons';
import NumberInput from './NumberInput';
import RadioButtonsExpandable from './RadioButtonsExpandable';
import RadioButtonsImages from './RadioButtonsImages';
import Dropdown from './Dropdown';
import Slider from './Slider';
import PriceQuantityInput from './PriceQuantityInput';

export {
  ColorSelector1,
  ColorSelector2,
  RadioButtons1,
  RadioButtonsImages,
  RadioButtonsList1,
  RadioButtonsList2,
  NumberInput,
  RadioButtonsExpandable,
  Dropdown,
  Slider,
  PriceQuantityInput,
};

const DefaultInputContainer = ({ label, description, children }) => {
  return (
    <Wrapper className="input-component">
      {label && <Label className="input-label">{label}</Label>}
      {description && (
        <Description className="input-description">{description}</Description>
      )}
      <InputWrapper className="input-wrapper">{children}</InputWrapper>
    </Wrapper>
  );
};

export default ({ label, description, type, data, value, onChange }) => {
  switch (type) {
    case 'color':
    case 'color-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <ColorSelector1 {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'color-2':
      return (
        <DefaultInputContainer label={label} description={description}>
          <ColorSelector2 {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'dropdown':
    case 'dropdown-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <Dropdown {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'radioButtonsList':
    case 'radioButtonsList-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsList1 {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'radioButtonsList-2':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsList2 {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'radioButtons':
    case 'radioButtons-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtons1 {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'RadioButtonsExpandable':
    case 'RadioButtonsExpandable-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsExpandable {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'RadioButtonsImages':
    case 'RadioButtonsImages-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsImages {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'slider':
      return (
        <DefaultInputContainer label={label} description={description}>
          <Slider {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'numberInput':
    case 'numberInput-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <NumberInput {...data} value={value} onChange={onChange} />
        </DefaultInputContainer>
      );
    case 'priceQuantity-1':
    case 'priceQuantity':
      return <PriceQuantityInput {...data} value={value} onChange={onChange} />;
    default:
      return null;
  }
};
