import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactsForm } from './PhonebookForm.styled';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  createContact = e => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
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
    this.props.addContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.createContact}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          onChange={this.handleChange}
          value={this.state.number}
          required
        />
        <button type="submit">Add contact</button>
      </ContactsForm>
    );
  }
}

export default PhonebookForm;
