import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto max-content max-content max-content;
  grid-gap: 8px;

  width: 100%;
  height: 30px;
  margin-bottom: 8px;

  & > div {
    position: relative;
    height: max-content;
    top: 50%;
    transform: translateY(-50%);
  }

  & > div:nth-child(2) {
    opacity: 0.4;
    transition: all 0.3s;
  }

  & > div:nth-child(4) {
    min-width: 36px;
    text-align: right;
    margin-left: 8px;
  }

  &:hover {
    & > div:nth-child(2) {
      /* opacity: 1; */
    }
  }
`;
