import React from 'react';
import { Wrapper, MenuItem, MainWrapper } from './bubbles.styles';

const Bubbles = ({ sections }) => {
  return (
    <Wrapper>
      <div>
        {sections.map(({ label, img }, i) => (
          <MenuItem key={i}>
            <div>
              <img src={img} alt={label} />
            </div>
          </MenuItem>
        ))}
      </div>
      <div>
        <MainWrapper>main content</MainWrapper>
      </div>
    </Wrapper>
  );
};

export default Bubbles;
