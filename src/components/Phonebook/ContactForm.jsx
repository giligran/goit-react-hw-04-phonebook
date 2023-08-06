import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormContact, Input, Button } from './Phonebook.styled';
import useLocalStorage from 'components/utils/hooks';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    onSubmit({ id, name, number });
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={nameId}>Name</label>
      <Input
        id={nameId}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <Input
        id={numberId}
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </FormContact>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
