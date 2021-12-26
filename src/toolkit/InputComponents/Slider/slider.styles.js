import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  grid-gap: 10px;
  margin-bottom: 30px;

  .ant-slider-handle {
    border: 2px solid grey;
  }

  .ant-slider-track {
    background-color: grey;
  }

  .ant-slider-handle:focus {
    box-shadow: 0 0 0 5px lightgrey;
  }

  .ant-slider:hover {
    .ant-slider-handle {
      border: 2px solid grey;
    }

    .ant-slider-track {
      background-color: grey;
    }
  }
`;
