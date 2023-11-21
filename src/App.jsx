import { AppWrapper, H1, H2 } from './components/Helpers/Components.styled';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import { useEffect, useState } from 'react';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    localData && setContacts(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(el => {
        return (
          el.name.toLowerCase() === newContact.name.toLowerCase() ||
          el.number === newContact.number
        );
      })
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const handleChange = e => {
    const value = e.target.value;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(() => {
      return contacts.filter(el => {
        if (el.id === id) {
          return false;
        }
        return true;
      });
    });
  };

  return (
    <AppWrapper>
      <H1>Phonebook</H1>
      <PhonebookForm addContact={addContact} />

      <H2>Contacts</H2>
      <PhonebookFilter filter={filter} handleChange={handleChange} />
      <PhonebookList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </AppWrapper>
  );
};

export default App;
