import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButtonsImages from './index';

const options = [
  {
    label: 'blue',
    value: 'blue',
    img: null,
  },
  {
    label: 'green',
    value: 'green',
    img: null,
  },
  {
    label: 'red',
    value: 'red',
    img: null,
  },
];

storiesOf('Input Components | Radio Buttons Images', module).add(
  'Default',
  () => <RadioButtonsImages options={options} value={options[0].value} />
);
