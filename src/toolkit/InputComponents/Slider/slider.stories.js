import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index';

const data = {
  value: 5,
  min: 0,
  max: 10,
};

storiesOf('Input Components | Slider', module).add('default', () => (
  <Slider {...data} />
));
