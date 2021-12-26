import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButtonsList1 from './RadioButtonsList1';
import RadioButtonsList2 from './RadioButtonsList2';

const options = [
  {
    label: 'blue',
    value: 'blue',
  },
  {
    label: 'green',
    value: 'green',
  },
  {
    label: 'red',
    value: 'red',
  },
];

storiesOf('Input Components | Radio Buttons List', module)
  .add('Row', () => (
    <RadioButtonsList1 options={options} value={options[0].value} />
  ))
  .add('Column', () => (
    <RadioButtonsList2 options={options} value={options[0].value} />
  ));
