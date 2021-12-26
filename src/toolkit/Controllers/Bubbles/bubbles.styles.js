import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 20px;
`;

export const MenuItem = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid gray;
  margin-bottom: 12px;

  & > div {
    height: 46px;
    width: 46px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;

    img {
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const MainWrapper = styled.div`
  background: white;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 20px 30px;
`;
