import React from 'react';
import { Accordion2 } from '../../Controllers';
import Player from '../SharedComponents/Player';
import {
  Wrapper,
  PlayerWrapper,
  Title,
  Subtitle,
} from './accordionTemplate2.styles';

const AccordionTemplate2 = ({
  title,
  subtitle,
  controller,
  configuration,
  handleSetAttribute,
}) => {
  return (
    <Wrapper>
      <PlayerWrapper>
        <Player />
      </PlayerWrapper>
      <div>
        {title && <Title className="template-title">{title}</Title>}
        {subtitle && (
          <Subtitle className="template-subtitle">{subtitle}</Subtitle>
        )}
        <Accordion2
          sections={controller}
          configuration={configuration}
          handleSetAttribute={handleSetAttribute}
        />
      </div>
    </Wrapper>
  );
};

export default AccordionTemplate2;
