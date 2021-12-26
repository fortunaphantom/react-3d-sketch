import React from 'react';
import { Accordion1 } from '../../Controllers';
import Player from '../SharedComponents/Player';
import {
  Wrapper,
  PlayerWrapper,
  Title,
  Subtitle,
} from './accordionTemplate1.styles';

const AccordianTemplate1 = ({
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
        <Accordion1
          sections={controller}
          configuration={configuration}
          handleSetAttribute={handleSetAttribute}
        />
      </div>
    </Wrapper>
  );
};

export default AccordianTemplate1;
