import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const ColorWrapper = styled.div`
  height: 40px;
  width: 40px;
  padding: 3px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  background: white;

  ${props => props.selected && 'border-color: black;'}

  margin-right: 16px;
  margin-bottom: 25px;

  & > div {
    background: ${props => props.color};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;
