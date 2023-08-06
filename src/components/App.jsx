import { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import useLocalStorage from './utils/hooks';
import { ContactForm, Filter, ContactList } from './Phonebook';
import { Wrapper, ContactsContaier } from './Phonebook/Phonebook.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
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
