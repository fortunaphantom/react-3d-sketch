import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberInput from './index';

const data = {
  label: 'Product Name',
  value: 2,
  price: 125,
  min: 0,
  max: 10,
  showTotal: false,
};

storiesOf('Input Components | Incrementor', module)
  .add('Without Price', () => <NumberInput {...data} price={null} />)
  .add('Without Total', () => <NumberInput {...data} />)
  .add('With Total', () => <NumberInput {...data} showTotal={true} />);
