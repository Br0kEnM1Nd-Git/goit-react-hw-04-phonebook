import { FilterForm } from './PhonebookList.styled';

const PhonebookFilter = ({ filter, handleChange }) => {
  return (
    <FilterForm>
      <label htmlFor="filter">Find contacts:</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </FilterForm>
  );
};

export default PhonebookFilter;
