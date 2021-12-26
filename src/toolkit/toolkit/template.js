import player from './player';

export const prepTemplate = (templateRaw, inputsRaw) => {
  if (!window.threekitApi) return [];
  const attributes = player.compileAttributesData();

  const prepInput = input => {
    if (typeof input.data === 'object') return input;

    if (input.data === 'tk-platform') {
      if (!attributes[input.attribute]) return null;
      return {
        ...input,
        data: { options: attributes[input.attribute].values },
      };
    }
  };

  const prepSections = sections =>
    sections.reduce((output, section) => {
      let updatedSection = { ...section };

      if (section.inputs && section.inputs.length > 0) {
        updatedSection.inputs = section.inputs
          .map(inputId => prepInput({ id: inputId, ...inputsRaw[inputId] }))
          .filter(input => !(input === null));
      }

      if (section.sections && section.sections.length > 0) {
        updatedSection.sections = prepSections(section.sections, inputsRaw);
      }

      output.push(updatedSection);

      return output;
    }, []);

  return prepSections(templateRaw);
};

export default { prepTemplate };
