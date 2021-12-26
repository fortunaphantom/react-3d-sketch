import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ButtonWrapper = styled.div`
  height: 32px;
  padding-left: 8px;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 12px;
  cursor: pointer;
  letter-spacing: 0.4px;
  /* border-bottom: 1px solid #cccccc; */

  ${props => props.selected && `color: grey; font-weight: 600;`}

  & > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  & > div:nth-child(1) {
    height: 16px;

    & > div {
      height: 16px;
      width: 16px;
      border: 1px solid grey;
      border-radius: 50%;

      & > div {
        height: calc(100% - 4px);
        width: calc(100% - 4px);
        margin: 2px;
        border-radius: 50%;
        ${props => props.selected && `background: grey;`}
      }
    }
  }

  & > div:nth-child(2) {
    height: 20px;
  }
`;
