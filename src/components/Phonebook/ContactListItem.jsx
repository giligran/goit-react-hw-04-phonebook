import PropTypes from 'prop-types';
import { Button } from './Phonebook.styled';

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li>
      {`${name}: ${number}`}
      <Button onClick={() => onDelete(id)}>Delete contact</Button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
