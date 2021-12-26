import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';

const sections = [
  {
    label: 'Section 1',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
  {
    label: 'Section 2',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
  {
    label: 'Section 3',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
];

storiesOf('Controllers | Accordion', module).add('option 1', () => (
  <Accordion1 sections={sections} />
));

storiesOf('Controllers | Accordion', module).add('option 2', () => (
  <Accordion2 sections={sections} />
));
