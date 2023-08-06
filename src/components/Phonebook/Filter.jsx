import PropTypes from 'prop-types';
import { Input } from './Phonebook.styled';

function Filter({ filter, value }) {
  return (
    <label>
      Find contacts by name
      <Input name="filter" onChange={filter} value={value}></Input>
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
