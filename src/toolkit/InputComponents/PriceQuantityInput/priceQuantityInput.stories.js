import React from 'react';
import { storiesOf } from '@storybook/react';
import PriceQuantityInput from './index';

const data = {
  label: 'Product Name',
  price: 125,
  min: 0,
  max: 10,
};

storiesOf('Input Components | PriceQuantityInput', module)
  .add('Quantity 0', () => <PriceQuantityInput {...data} value={0} />)
  .add('Quantity 1', () => <PriceQuantityInput {...data} value={1} />)
  .add('Quantity 2+', () => <PriceQuantityInput {...data} value={2} />);
