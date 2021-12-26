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
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background: ${props => props.color};

  margin-right: 16px;
  margin-bottom: 25px;

  & > div {
    font-size: 18px;
    text-align: center;
    color: white;
    height: min-content;
    position: relative;
    top: 52%;
    transform: translateY(-50%);
  }
`;
