import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Item = styled.div`
  height: max-content;
  border: 1px solid #d3d4d3;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 2px;
  background: #fafafa;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.selected ? 'grey' : 'white')};

  img {
    height: 50px;
    object-fit: contain;
  }

  & > div:nth-child(1) {
    height: ${props => (props.img ? '70px' : '45px')};
    padding: 0 15px;
    border-radius: 3px;
    cursor: pointer;

    display: grid;
    grid-template-columns: max-content auto max-content;
    grid-gap: 10px;

    & > div {
      height: max-content;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  & > div:nth-child(2) {
    max-height: ${props => (props.expanded ? '380px' : 0)};
    transition: all 0.3s;
    overflow-y: scroll;

    & > div {
      padding: 20px 30px;
    }
  }
`;

export const SecondaryItem = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 10px;
  margin-bottom: 5px;

  & > div:nth-child(1) {
    font-weight: 600;
  }
`;
