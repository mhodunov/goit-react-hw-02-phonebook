import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = uuidv4();
    const { name, number } = this.state;

    if (!name) {
      return;
    }

    const newContact = { id: id, name: name, number: number };

    this.props.submitHandler(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={this.state.name}
            onChange={this.handleInput}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            value={this.state.number}
            onChange={this.handleInput}
            required
          />
        </label>
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;