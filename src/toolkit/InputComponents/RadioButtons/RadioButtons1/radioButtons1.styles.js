import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > div {
    margin-right: 12px;
    margin-bottom: 15px;
  }
`;

export const ButtonWrapper = styled.div`
    font-size: 12px;
    letter-spacing: 1px; 
    padding: 10px 12px;
    border-radius: 4px;

    cursor: ${props => (props.disabled ? 'default' : 'pointer')};

    transition: all 0.3s;

    &:hover {

      ${props =>
        !props.disabled &&
        `
    box-shadow: ${
      props.selected
        ? `0px 7px 20px #1890ff55`
        : `0px 7px 20px rgba(0, 0, 0, 0.1)`
    };
    transform: translateY(-4px);
      `}
    }

    background: ${props =>
      props.disabled ? '#f5f5f5' : props.selected ? '#1890ff' : ''};
    color: ${props =>
      props.disabled ? 'rgba(0,0,0,.25)' : props.selected ? 'white' : 'grey'};

    ${props => props.disabled && `border-color: #d9d9d9;`}

    box-shadow: ${props =>
      props.disabled
        ? '0px 2px 5px 0px rgba(0,0,0,0.1)'
        : props.selected
        ? `0px 7px 20px #1890ff55`
        : `0px 3px 6px 2px rgba(0, 0, 0, 0.1)`};
    transform: ${props =>
      props.selected ? 'translateY(-4px)' : 'translateY(0px)'};
`;
