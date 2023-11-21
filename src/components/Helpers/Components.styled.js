import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  gap: 10px;
`;

const H1 = styled.h1`
  font-size: 40px;
`;

const H2 = styled.h2`
  font-size: 32px;
`;

const Div = styled.div``;

const Ul = styled.ul`
  list-style-type: none;
`;

const Input = styled.input``;

export { AppWrapper, Div, Ul, Input, H1, H2 };
