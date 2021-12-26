import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButtonsExpandable from './index';

const options = [
  {
    label: 'blue',
    value: 'blue',
    img: null,
    data: {
      id: 3456789,
      planet: 'mars',
    },
  },
  {
    label: 'green',
    value: 'green',
    img: null,
    data: {
      id: 456789,
      planet: 'jupiter',
    },
  },
  {
    label: 'red',
    value: 'red',
    img: null,
    data: {
      id: 3445678956789,
      planet: 'venus',
    },
  },
];

storiesOf('Input Components | Radio Buttons Expandable', module).add(
  'Default',
  () => <RadioButtonsExpandable options={options} value={options[0].value} />
);
