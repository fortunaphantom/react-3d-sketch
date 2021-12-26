import styled from 'styled-components';

export const Wrapper = styled.div`
  height: max-content;
  border: 1px solid #d3d4d3;
  border-radius: 3px;
  width: 420px;
  margin-bottom: 2px;
  background: #fafafa;

  & > div:nth-child(1) {
    height: 45px;
    padding: 0 15px;
    border-radius: 3px;
    cursor: pointer;

    display: grid;
    grid-template-columns: auto max-content max-content;
    grid-gap: 10px;

    & > div {
      height: max-content;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  & > div:nth-child(2) {
    max-height: ${props => (props.selected ? '380px' : 0)};
    transition: all 0.3s;
    overflow-y: scroll;

    & > div {
      padding: 20px 30px;
    }
  }
`;
