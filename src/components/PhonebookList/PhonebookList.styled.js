import { Ul } from 'components/Helpers/Components.styled';
import styled from 'styled-components';

const FilterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  & > label {
    font-size: 36px;
  }
  & > input {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    width: 250px;
    border: 0.1px solid grey;
    &:focus-visible {
      outline: 0;
      background-color: rgba(0, 0, 155, 0.1);
    }
  }
`;

const ContactsList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  & > li {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  & > li > span {
    font-size: 24px;
  }
  & > li > button {
    border: 0;
    box-shadow: 0px 0px 3px blue;
    border-radius: 10px;
    padding: 2px 5px;
    &:hover {
      background-color: white;
      box-shadow: 0px 0px 5px blue;
      cursor: pointer;
    }
  }
`;

export { FilterForm, ContactsList };
