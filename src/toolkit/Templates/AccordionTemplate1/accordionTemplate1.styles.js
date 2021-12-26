import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  grid-gap: 30px;

  min-height: 100vh;
  width: max-content;
  /* width: 80vw; */

  margin: 0 auto;
`;

export const PlayerWrapper = styled.div`
  & > div {
    /* height: 400px; */
    width: 600px;
    height: 400px;
    max-height: 100vh;
    max-width: 60vw;
    /* margin: 0 auto; */
  }
`;

export const Title = styled.div`
  font-size: 18px;
  color: #444444;
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
`;
