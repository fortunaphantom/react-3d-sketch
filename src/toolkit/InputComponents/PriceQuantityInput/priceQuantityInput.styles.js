import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: ${props => (props.expand ? '200px' : '50px')};
  border-bottom: 1px solid #ededed;
  overflow: hidden;

  transition: all 0.3s;
`;

export const Primary = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-gap: 10px;

  ${props => props.disabled && `color: #bbbbbb;`}

  height: 50px;
  width: 100%;
  

  & > div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  & > div:nth-child(1) {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    min-height: 27px;
    height: max-content;

    & > div {
      height: max-content;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s;
    }
    & > div {
      transition: all 0.2s;
      overflow-x: hidden;
    }

    & > div:nth-child(1),
    & > div:nth-child(3) {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      font-size: 12px;

      &:hover {
        background: #1890ff;
        border-color: #1890ff;
        color: white;
      }
      cursor: ${props => (props.disabled ? 'default' : 'pointer')};

      background: ${props => (props.value === 0 ? 'none' : `#1890ff`)};
      ${props => props.value !== 0 && 'color: white;'};
      border: 1px solid
        ${props => (props.value !== 0 ? '#1890ff' : 'rgba(0, 0, 0, 0.65)')};

      ${props =>
        props.disabled &&
        `border-color: #bbbbbb !important; 
        color: #bbbbbb !important; 
        background: none !important;`}
    }


    & > div:nth-child(1) > div,
    & > div:nth-child(3) > div {
        height: max-content;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
    }

    & > div:nth-child(1) {
      ${props => props.value === 0 && 'border: none;'}
      width: ${props => (props.value === 0 ? '0px' : '25px')};
    }
    & > div:nth-child(2) {
      text-align: center;
      width: ${props => (props.value === 0 ? '0px' : '30px')};
    }
  }

  & > div:nth-child(2) {
      font-size: 14px;
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: right;
    font-size: 14px;
    
  }
`;

export const Secondary = styled.div`
  height: max-content;
`;
