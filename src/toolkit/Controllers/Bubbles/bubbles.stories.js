import React from 'react';
import { storiesOf } from '@storybook/react';
import Bubbles from './index';

const sections = [
  {
    selected: false,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png',
    label: 'Section 1',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
  {
    selected: true,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png',
    label: 'Section 2',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
  {
    selected: false,
    img:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png',
    label: 'Section 3',
    heading: 'Section Heading',
    description: 'This is a description',
    children: 'blue',
  },
];

storiesOf('Controllers | Bubbles', module).add('default', () => (
  <Bubbles sections={sections} />
));
