import styled from 'styled-components';

const ContactsForm = styled.form`
  width: 400px;
  border: 0.5px solid grey;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  & > label {
    font-size: 18px;
    width: 150px;
  }
  & > input {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    width: 150px;
    border: 0.1px solid grey;
    &:focus-visible {
      outline: 0;
      background-color: rgba(0, 0, 155, 0.1);
    }
  }
  & > button {
    width: 120px;
    height: 30px;
    border-radius: 15px;
    border: 0.1px solid black;
    &:hover {
      background-color: white;
      border: 0.5px solid grey;
      cursor: pointer;
    }
  }
`;

export { ContactsForm };
