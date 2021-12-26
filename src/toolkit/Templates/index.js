import React from 'react';

import TemplateContainer from './TemplateContainer';

import Player from './SharedComponents/Player';

import AccordionTemplate1 from './AccordionTemplate1';
import AccordionTemplate2 from './AccordionTemplate2';

const templates = {
  'accordian-1': AccordionTemplate1,
  'accordian-2': AccordionTemplate2,
};

export { Player };

export default ({
  template: templateData,
  sections,
  inputs,
  threekitConfig,
}) => {
  const { templateId, title, subtitle } = templateData;
  return (
    <TemplateContainer
      template={templates[templateId] || templates[Object.keys(templates)[0]]}
      title={title}
      subtitle={subtitle}
      sections={sections}
      inputs={inputs}
      threekitConfig={threekitConfig}
    />
  );
};
