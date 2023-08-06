import { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import useLocalStorage from './utils/hooks';
import { ContactForm, Filter, ContactList } from './Phonebook';
import { Wrapper, ContactsContaier } from './Phonebook/Phonebook.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const handleSubmit = data => {
    const { name } = data;
    const isContactExist = contacts.find(contact => contact.name === name);
    if (isContactExist) {
      Report.failure(`${name}`, `This name already in contact list`, 'Okay');
    } else {
      setContacts([...contacts, data]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeInput = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <Wrapper>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={changeInput} value={filter} />
      <ContactsContaier>
        <ContactList users={filterList()} onDelete={deleteContact} />
      </ContactsContaier>
    </Wrapper>
  );
};
