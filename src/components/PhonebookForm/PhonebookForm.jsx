import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ContactsForm } from './PhonebookForm.styled';

const PhonebookForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const elName = e.target.name;
    const elValue = e.target.value;
    switch (elName) {
      case 'name':
        setName(elValue);
        break;
      case 'number':
        setNumber(elValue);
        break;
      default:
        break;
    }
  };

  const createContact = e => {
    e.preventDefault();
    if (name.split(' ').length < 2) {
      return alert('Name must contain more than 1 word.');
    }
    if (number.split('-').length < 2) {
      return alert('Write number in 123-456 case.');
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={createContact}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        id="number"
        onChange={handleChange}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </ContactsForm>
  );
};

export default PhonebookForm;
