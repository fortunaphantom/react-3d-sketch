export default {
  primaryMaterial: {
    label: 'Primary Material',
    attribute: 'Primary Material',
    type: 'dropdown',
    data: 'tk-platform',
  },
  accentMaterial: {
    label: 'Accent Material',
    attribute: 'Accent Material',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  finishMaterial: {
    label: 'Finish Material',
    attribute: 'Finish Material',
    type: 'color-1',
    data: 'tk-platform',
  },
  revealMaterial: {
    label: 'Reveal Material',
    attribute: 'Reveal Material',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  baseMaterial: {
    label: 'Base Material',
    attribute: 'Base Material',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  handrailShape: {
    label: 'Handrail Shape',
    attribute: 'Handrail Primary',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  handrailMaterial: {
    label: 'Handrail Material',
    attribute: 'Handrail Material',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  height: {
    label: 'Height',
    attribute: 'Height',
    type: 'priceQuantity',
    data: { min: 0, max: 100, step: 1, price: 19.99 },
  },
  width: {
    label: 'Width',
    attribute: 'Width',
    type: 'slider',
    data: { min: 0, max: 100, step: 1 },
  },
  depth: {
    label: 'Depth',
    attribute: 'Depth',
    type: 'slider',
    data: { min: 1, max: 100, step: 1 },
  },
};
