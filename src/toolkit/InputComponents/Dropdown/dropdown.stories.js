import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './index';

const options = [
  {
    label: 'options 1',
    value: 'opt-1',
  },
  {
    label: 'option 2',
    value: 'opt-2',
  },
  {
    label: 'option 3',
    value: 'opt-3',
  },
];

storiesOf('Input Components | Dropdown', module).add('option 1', () => (
  <Dropdown options={options} value={options[0].value} />
));
