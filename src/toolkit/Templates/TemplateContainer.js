import React, { useState, useEffect } from 'react';
import {
  handleAddToCart,
  handleInputSelect,
} from '../../config/eventListeners';
import toolkit from '../toolkit';

const TemplateContainer = ({
  template: Template,
  title,
  subtitle,
  sections,
  inputs,
  threekitConfig,
}) => {
  const [controller, setController] = useState([]);
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    (() => {
      // toolkit.player.initializePlayer({
      //   el: document.getElementById('player-root'),
      //   ...threekitConfig,
      //   // onLoad: () => console.log('Player Loaded'),
      //   // onRender: () => console.log('Player Rendered'),
      //   onPreload: () => {
      //     console.log('Player Pre-loaded');

      //     const templateData = toolkit.template.prepTemplate(sections, inputs);

      //     setController(templateData);

      //     console.log('template', templateData);
      //   },
      // });
    })();
  }, []);

  const handleSetAttribute = config => {
    toolkit.player.setConfiguration(config);

    setTimeout(() => {
      const updatedConfiguration = toolkit.player.getConfiguration();
      const updatedController = toolkit.template.prepTemplate(sections, inputs);
      setConfiguration(updatedConfiguration);
      setController(updatedController);

      console.log('configuration', updatedConfiguration);

      const configOutput = toolkit.player.getConfigurationOutput();
      handleInputSelect(config, configOutput);
    }, 0.2 * 1000);
  };

  const addToCart = () => {
    const configOutput = toolkit.player.getConfigurationOutput();
    handleAddToCart(configOutput);
  };

  return (
    <Template
      title={title}
      subtitle={subtitle}
      controller={controller}
      configuration={configuration}
      handleSetAttribute={handleSetAttribute}
    />
  );
};

export default TemplateContainer;
