import React from 'react';

import { Templates } from './toolkit';

import templateData from './config/template';
import sectionsData from './config/sections';
import inputsData from './config/inputs';
import threekitConfig from './config/threekitConfig';

const App = () => {
  return (
    <Templates
      template={templateData}
      sections={sectionsData}
      inputs={inputsData}
      threekitConfig={threekitConfig}
    />
  );
};

export default App;
